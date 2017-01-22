var carousel = document.getElementById('carousel');

var elements = carousel.getElementsByClassName("hideable"); // gets all the "slides" in our slideshow
var circles = carousel.getElementsByClassName("circle");

var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

var activeSlide = -1;
nextSlide();

for (var i = 0; i < circles.length; i++)
{
    circles[i].addEventListener("click", changeToSlide(i));
}

function changeToSlide(slide)
{
    return function(){
        deactivateAllSlides();

        elements[slide].setAttribute("active", "true");
        circles[slide].setAttribute("active", "true");

        activeSlide = slide;
    }
}

function deactivateAllSlides(){
    for(var i = 0; i < elements.length; i++){
        elements[i].setAttribute("active", "false");
        circles[i].setAttribute("active", "false");
    }
}

function nextSlide(){

    if(activeSlide == elements.length-1){
        activeSlide = 0;
    }
    else{
        activeSlide += 1;
    }

    deactivateAllSlides();

    elements[activeSlide].setAttribute("active", "true");
    circles[activeSlide].setAttribute("active", "true");

}

function prevSlide(){

    if(activeSlide == 0){
        activeSlide = elements.length-1;
    }
    else{
        activeSlide -= 1;
    }

    deactivateAllSlides();

    elements[activeSlide].setAttribute("active", "true");
    circles[activeSlide].setAttribute("active", "true");

}

nextBtn.onclick = function()
{
    nextSlide();
};

prevBtn.onclick = function()
{
    prevSlide();
};