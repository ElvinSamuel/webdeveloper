var body = document.querySelector("body"); // Select something you want to use
var h1 = document.querySelector("h1"); 
var isBlue = false;

setInterval(function(){
    if (isBlue) {
        body.style.background = "Gainsboro";
        h1.style.color = "Olive";
    } else {
        body.style.background = "#FED";
        h1.style.color = "#FF00FF";
    }
    isBlue = !isBlue; // change it to the opposite
}, 1000);