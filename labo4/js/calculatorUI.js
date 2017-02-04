/**
 * Created by Nadia on 2017-02-02.
 */

var calculator = new Calculator();
var value = '';
var operator = calculator.value;

var generateUI = function() {
    generateDisplay();
    generateButtons();
}

var generateDisplay = function(){
    $("#calculator").append($('<div id="head"></div>'));
    $("#head").append($('<input type="button" id="clear-btn" value="C"/>'));
    $("#clear-btn").click(onClearButton);
    $("#head").append($('<input type="button" id="geo-btn" value="G"/>'));
    $("#head").append($('<div id="display"></div>'));
}

var generateButtons = function() {
    $("#calculator").append($('<div id="buttons"></div>'));
    var symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "="];
    for(var i = 0; i < 10; i++){
        createButton(symbols[i], onNumberButton(symbols[i]));
    }
    for(i = 10; i < symbols.length; i++){
        createButton(symbols[i], onOperatorButton(symbols[i]));
    }
    createButton('sin', onSinButton);
    createButton('cos', onCosButton);
    createButton('tan', onTanButton);
    createButton('!', onFactorialButton);
}

var createButton = function(symbol, callback){
    var btn = $('<input type="button" value="'+symbol+'"/>');
    $("#buttons").append(btn);
    btn.click(callback);
}

var onNumberButton = function(symbol) {
    return function() {
        value += symbol.toString();
        updateDisplay(value);
    }
}

var onOperatorButton = function(symbol) {
    return function() {
        console.log(symbol);
        operator(value);
        if(symbol == '+'){
            operator = calculator.add;
            value = '';
        }
        else if(symbol == '-'){
            operator = calculator.subtract;
            value = '';
        }
        else if(symbol == '*'){
            operator = calculator.multiply;
            value = '';
        }
        else if(symbol == '/'){
            operator = calculator.divide;
            value = '';
        }
        else if(symbol == '='){
            updateDisplay(calculator.equals());
            operator = calculator.value;
            value = calculator.equals;
        }
    }
}

var onSinButton = function(){
    operator = calculator.sin;
}

var onCosButton = function(){
    operator = calculator.cos;
}

var onTanButton = function(){
    operator = calculator.tan;
}

var onFactorialButton = function(){
    operator = calculator.factorial;
}

var onClearButton = function(){
    operator = calculator.value;
    value = '';
    calculator.clear();
    updateDisplay(value);
}

var updateDisplay = function(value){
    $("#display").html(value);
}

$(document).ready( function() {
    function getGeoloc(){
        navigator.geolocation.getCurrentPosition(updatePosition);
    }

    function updatePosition(position){
        value = '';
        calculator.clear();
        operator = calculator.value;
        $("#display").html(
            "Lat:" + position.coords.latitude + ", Long:" + position.coords.longitude);
    }

    $("#geo-btn").click(function (event) {
        getGeoloc();
    })
});

generateUI();