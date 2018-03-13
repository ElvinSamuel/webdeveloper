var express = require("express");
var app = express();

/*Now We'll Defined Our First Route!*/

/*Note: 'req' and 'res' (or whatever names you use) are actually OBJECTS*/
app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Bye!");
});

app.get("/dog", function(req, res){
    /*You're server is actually working -- other's can make a request!*/
    console.log("Someone is accessing the Dog page!");
    res.send("Meow?");
});

/*
While Talking About DRY Code, Colt Mentions The Way Reddit Probably Works. 
There's No Way That There's An Individual Route For Each And Every Page On The Sub.
Instead, Every Page Has /r/SomePageName. Using The ':' We Can Let Node Know To Look
For Some Name Variable There. Every Sub Page Is /r/:SomeNameHere, Allowing Us To 
Simplify Code
*/

/*
Note The ':' Denotes A PATTERN. If My Pattern Is '/r/:SomeNameHere', You Won't
Find A Match If You Do '/r/SomeNameHere/SomeOtherNameHere. You'd Have To Do
'/r/:SomeNameHere/:SomeNameNext' To Denote That Pattern.
*/

// example: 
app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    console.log(req.params); // let's look at the 'params' object
    var subreddit = req.params.subredditName; // let's get the Name out of that object
    res.send("WELCOME TO THE " + subreddit.toUpperCase() +" PAGE!");
});

// 'comments' will be the same for all----> |------|

app.get("/r/:subredditName", function(req, res){
    res.send("WELCOME TO A SUBREDDIT");
});


/*What if a user goes to some other random page that simply doesn't exist? We'll handle that request here.*/

/*NOTE: The order of routes MATTERS in Node.js -- Leave the (*) one last.*/
app.get("*", function(req, res) {
    res.send("YOU ARE A STAR!!!");    
});

/*We actually have to LISTEN to it*/
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
}); /*The C9 Port that we use*/