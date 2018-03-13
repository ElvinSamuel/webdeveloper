/*Let's Ask Em An Annoying Question*/
var answer = prompt("Are We There Yet?");

/*Does The User Say Yes?*/
// while (answer !== "yes" && answer !== "yeah" ) {
//     var answer = prompt("Are We There Yet?");
// }

// alert("Yay, We Made It!!!");


/*Let's Try To Evaluate It If 'yes' Is Anywhere In The String*/
while (answer.indexOf("yes") === -1) {
    var answer = prompt("Are We There Yet?");
}

alert("Yay, We Made It!!!");