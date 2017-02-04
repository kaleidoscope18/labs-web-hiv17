/**
 * Created by Nadia on 2017-02-02.
 */


var calculator = new Calculator();
var value = 0;
var operator = calculator.value;
var displayString = '';

var generateUI = function() {
    generateDisplay();
    generateButtons();
}

var generateDisplay = function() {
    $("#calculator").append($('<div id="head"></div>'));
    $("#head").append($('<input type="button" value="C"/>'));
    $("#head").append($('<input type="button" value="G"/>'));
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
}

var createButton = function(number, callback){
    var btn = $('<input type="button" value="'+number+'"/>');
    $("#buttons").append(btn);
    btn.click(callback);
}

var onNumberButton = function(symbol) {
    return function() {
        value += symbol.toString();
    }
}

var onOperatorButton = function(symbol) {
    return function() {
        operator(value);
        if(symbol == '+'){
            operator = calculator.add;
        }
        else if(symbol == '-'){
            operator = calculator.subtract;
        }
        else if(symbol == '='){
            console.log(calculator.equals());
            operator = calculator.value;
        }
        value = 0;
    }
}

generateUI();