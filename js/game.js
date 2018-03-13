/*
Note:

    In JS, when you use prompt if you type a number it isn't stored as a number,
     but a STRING. That explains why in the Bouncer Exercise last time I had to use
     '==' instead of '==='. 
*/

/*Create A Secret Number*/
var secretNumber = 4;

/*Ask User For A Guess*/
var guess = prompt("Guess A Number: ");
/*Let's Change It Back To A Number*/
guess = Number(guess);

// Check If Guess Is Right
if (guess === secretNumber) {
    alert("You Got It Right!")
}

/*Otherwise Check If Higher*/
else if (guess > secretNumber) {
    alert("Too High, Guess Again!");
}
/*Otherwise Check If Lower*/
else {
    alert("Too Low, Guess Again!");
}