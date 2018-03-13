/*We're Creating An App That You Can Add Friends To*/
/*The Goal Is To Add A Form To The Bottom Of This Page*/

var express = require("express");
var app = express();

/*Body-Parser Let's You Get The Content From The Body Of A Request*/
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

/*
Below: We create this variable at the global scope level for just to get 
through and hard code this example. In the future, we'll use a DATABASE to hold 
these values
*/
var friends = ["Tony", "Miranda", "Pierre", "Justin", "Lily"];

app.get("/", function(req, res){
    res.render("home");
});

/*Post Routes Add Data To The Server*/
app.post("/addFriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    // res.send("YOU HAVE REACHED THE POST ROUTE"); 
    /*Take Us Back To The Friends Page*/
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started. Listening On Port: " + process.env.PORT);
});