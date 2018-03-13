/*Will The Bouncer Let Us In?*/

/*Let's Get Some User Input*/
var age = prompt("How Old Are You? ");

if (age < 0 ) {
    console.log("Sorry, but only *real* ages are allowed in.");
} else if (age % 2 && age != 21) {
    console.log("Your Age Is Odd!");
} else if ((age > 0) && (Math.sqrt(age) % 1 == 0)) {

} else if (age < 18) {
    console.log("Sorry, you are not old enough to enter the venue.");
} else if (age < 21) {
    console.log("You can enter, but you can't drink.");
} else if (age == 21) {
  console.log("Happy 21st Birthday! Come on in!");  
} else {
    console.log("Come on in. You can drink.");
}