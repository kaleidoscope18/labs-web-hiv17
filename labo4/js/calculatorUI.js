/**
 * Created by Nadia on 2017-02-02.
 */

var calculator = new Calculator();
var value = '';
var operator = calculator.value;

var generateUI = function() {
    generateDisplay(); //TO ADD
    generateButtons();
}

var generateDisplay = function() {
    $("#calculator").append($('<div id="display"></div>'));
}

var generateButtons = function() {
    $("#calculator").append($('<div id="buttons"></div>')); //TO ADD
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
    createButton('C', onClearButton());
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
        }
        else if(symbol == '-'){
            operator = calculator.subtract;
        }
        else if(symbol == '*'){
            operator = calculator.multiply;
        }
        else if(symbol == '/'){
            operator = calculator.divide;
        }
        else if(symbol == '='){
            updateDisplay(calculator.equals());
            operator = calculator.value;
        }
        value = '';
    }
}

var onSinButton = function(){
    operator(value);
    operator = calculator.sin;
    value = '';
}

var onCosButton = function(){
    operator(value);
    operator = calculator.cos;
    value = '';
}

var onTanButton = function(){
    operator(value);
    operator = calculator.tan;
    value = '';
}

var onFactorialButton = function(){
    operator(value);
    operator = calculator.factorial;
    value = '';
}

var onClearButton = function(){
    operator = calculator.value;
    value = '';
    calculator.clear();
    updateDisplay(value);
}

var updateDisplay = function(value){
    $("#result-display").html(value);
}

$(document).ready( function() {
    function getGeoloc(){
        navigator.geolocation.getCurrentPosition(updatePosition);
    }

    function updatePosition(position){
        console.log('ok');
        //value = '';
        //calculator.clear();
        //operator = calculator.value;
        $("#result-display").html(
            "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
    }

    $("#refresh-geoloc-button").click(function (event) {
        getGeoloc();
    })
});

generateUI();