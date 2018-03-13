var express = require("express");
var app = express();

//Don't Forget To Add The View For EJS (Embedded JavaScript)
app.use(express.static("public")); // Use this to add the CSS file

/*BELOW: This Lets Us Cut The '.ejs' Off Of The Filenames.*/
app.set("view engine", "ejs");

/*Let's Start  With The Home Page*/
app.get("/", function(req, res){
   res.render("home"); /*We'll build this page in a second*/ 
});

/*Let's Make A Responsive Request*/
app.get("/someroute/:routeName", function(req, res){
    var routeName = req.params.routeName;
    res.render("someroute", {routeName: routeName});
});

/*The Server Has To Listen*/
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Listening On Port: " + process.env.PORT);
})