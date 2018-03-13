/*
====================================
Routing Exercise, Beginning Express
====================================

1. Create a brand new Express app from scratch
2. Create a package.json using 'npm init' and add express as a dependency
3. In your main app.js file, add 3 different routes:
*/

var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

/*The Animals Pattern -- '/speak/:someNameHere*/
/*Don't forget about DRY code, all of the animals will be different here*/
app.get("/speak/:Animal", function(req, res){
    // console.log(req.params.Animal);
    // res.send("Hi Animal, This Is Dad");
    var animal = req.params.Animal.toLowerCase(); // do something with that parameter
    // var sound = ""; // blank string where we'll store our sound
    
    
    // below: this seems like it would've been a good place to use 'case/switch'
    
    // if (animal.toUpperCase() === "PIG") {
    //     sound = "'Oink'";
    // } else if (animal.toUpperCase() === "COW") {
    //     sound = "'Moo'";
    // } else if (animal.toUpperCase() === "DOG") {
    //     sound = "'Woof Woof!'";
    // } else {
    //     sound = "???";
    // }
    
    var sound = {
        pig: "'Oink'",
        cow: "'Moo'",
        dog: "'Woof Woof!'",
        cat: "'I hate humans.'",
        goldfish: "'...(bloop)'"
    }
    
    sound = sound[animal];
    res.send("The " + animal + " says " + sound);
});

/*The Repeat Pattern -- '/repeat/:someNameHere/:someNumberHere*/
app.get("/repeat/:word/:num", function(req, res){
   var word = req.params.word; // where we'll get the word we'll repeat
   var numStr = req.params.num; // where we'll get how many times to repeat it
   var num = parseInt(numStr, 10); // gotta turn it back into a number first
   var str = ""; // blank string we'll use as a default
   
   /*The final string we'll use*/
   for (var i = 0; i < num; i++) {
       str += word + " ";
   }
   res.send(str);
});

/*
If a use visits any other route print:
"Sorry, page not found...What are you doing with your life?"
*/
app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Listening Exercise");
});