var express = require("express");
var app = express();

/*Body Parser's Needed Here*/
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Tracer", "Lucio", "McCree", "Zenyatta", "D.Va"];

/*Adding A Stylesheet For Extra Practice*/
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addFriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Up & Running, Listening On Port " + process.env.PORT);
});