/**
 * Created by Nadia on 2017-02-02.
 */

var strToCalculate = "";

var generateUI = function() {
    generateButtons();
}

var generateButtons = function() {
    var symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/"];
    for(var i = 0; i < 10; i++){
        createButton(symbols[i], btnFct(symbols[i]));
    }
    for(var i = 10; i < symbols.length; i++){
        createButton(symbols[i], btnFct(symbols[i]));
    }
}

var createButton = function(symbol, callback){
    var btn = $('<input type="button" value="'+symbol+'"/>');
    $("#buttons").append(btn);
    btn.click(callback);
}

var btnFct = function(symbol) {
    return function() {
        strToCalculate += symbol;
    }
}

generateUI();