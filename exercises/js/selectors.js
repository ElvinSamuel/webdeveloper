/*
Come Up With 4 Ways To Select The First <p> Tag
*/
var p1 = document.getElementById("first");
/*The two below might not be the same data type though.*/
var p1 = document.getElementsByClassName("special");
    var p1 = p1[0];
var p1 = document.getElementsByTagName("p");
    var p1 = p1[0];
    /*===============================*/
var p1 = document.querySelector("#first");
var p1 = document.querySelector(".special");
var p1 = document.querySelectorAll("#first");