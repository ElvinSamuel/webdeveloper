/*
You might see the following sometimes:

var app = require("express")() <-- initalize it immediately. 

Just a preference thing.
*/

var express = require("express"); //adds express to the app (like when you declare a function w/o the '()' it just shows you the OBJECT.)
var app = express(); //initializes express (now you can USE the function)

/*We have to tell Express where to look for everything EXCEPT the views folder*/
app.use(express.static("public")); // Used in this project for the CSS file

/*We can also cut the '.ejs' off of the filenames with this: */
app.set("view engine", "ejs");

app.get("/", function(req, res){
    // res.send("<h1>Welcome To The Homepage!</h1><h2>HTML Does Work Inside The JS File</h2>");
    // ABOVE: Who'd want to type out a full web page here!? Instead of making it look ugly, 
    // we use .render method to then pull in our html.
    
    /*We don't use HTML in here directly, but EJS (EMBEDED JAVASCRIPT) instead.*/
    res.render("home"); // Express will always look for a 'views' folder
    console.log("User Accessed The Home Page.");
    
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    // res.send("You Fell In Love With With " + thing);
    res.render("love", {thingVar: thing});
});

app.get("/chicken/:bawk", function(req, res){
    var chick = req.params.bawk;
    console.log(chick);
});


app.get("/posts", function(req, res){
    var posts = [
            {title: "Berners Are The Best!", author: "Susie"},
            {title: "Singapura Is A Type Of Cat!?", author: "Charlie"},
            {title: "Can You Believe This Sugar Glider?", author: "Katie"},
        ];
        
    res.render("posts", {posts: posts});
    console.log("User Accessed The Posts Page");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Is Listening On Port: " + process.env.PORT);
});