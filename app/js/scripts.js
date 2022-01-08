const btnhamburger = document.querySelector("#btnhamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const fadeElem = document.querySelectorAll(".has-fade");

btnhamburger.addEventListener('click', function(){
    console.log("Hamburger clicked");
    if(header.classList.contains("open")){
        header.classList.remove("open");
        body.classList.remove("no-scroll");
        fadeElem.forEach(function(element){
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        })
    }
    else{
        header.classList.add("open");
        body.classList.add("no-scroll")
        fadeElem.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        })
    }
})