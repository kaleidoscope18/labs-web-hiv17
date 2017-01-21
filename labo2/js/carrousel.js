var elements = document.getElementsByClassName("hideable"); // gets all the "slides" in our slideshow

elements[0].style.opacity = 1;

var actualImg = 0;

var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

var circles = document.getElementsByClassName("circle");

circles[actualImg].style.backgroundColor = "#98cc1f";

nextBtn.onclick = function() {
    circles[actualImg].style.backgroundColor = "#c06";
    fadeOut(elements[actualImg]);
    increment();
    fadeIn(elements[actualImg]);
    circles[actualImg].style.backgroundColor = "#98cc1f";
};

prevBtn.onclick = function() {
    circles[actualImg].style.backgroundColor = "#c06";
    fadeOut(elements[actualImg]);
    decrement();
    fadeIn(elements[actualImg]);
    circles[actualImg].style.backgroundColor = "#98cc1f";
};

function increment(){
    if(actualImg == elements.length-1){
        actualImg = 0;
    }
    else{
        actualImg += 1;
    }
}

function decrement() {
    if(actualImg == 0)
    {
        actualImg = elements.length-1;
    }
    else {
        actualImg -= 1;
    }
}

function fadeOut(image) {
    var id = setInterval(frame, 1);
    var value = 1;
    function frame(){
        value -= 0.01;
        if(value <= 0){
            clearInterval(id);
        }
        else{
            image.style.opacity = value;
        }
    }
}

function fadeIn(image) {
    var id = setInterval(frame, 1);
    var value = 0;
    function frame(){
        value += 0.01;
        if(value >= 1){
            clearInterval(id);
        }
        else{
            image.style.opacity = value;
        }
    }
}