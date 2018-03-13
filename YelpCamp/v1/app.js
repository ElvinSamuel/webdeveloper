var express = require("express");
var app = express();
var bodyParser = require("body-parser");

/*Temporarily Storing Our Data In An Array (Until I Add The Database)*/
var campgrounds = [
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8225/8524305204_43934a319d.jpg"},
    {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"}
];

/*The Lines I Use All The Time:*/
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("landing");
});


/*
    This Campgrounds Section Is Using RESTful Programming
*/
app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

/*This Is Where The Form Will Stay*/
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

/*Multiple Request Types (Get, Post, Delete, etc.) Can Have The Same Route Name*/
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    // redirect back to the campgrounds page
    
    /*This Is The Importance Of 'body-parser' -- It Let's You Access Content From The Page Itself*/
    var name = req.body.name;
    var image = req.body.image;
    
    /*Pushing That Data Into A New Array First*/
    var newCampground = { name: name, image: image }
    campgrounds.push(newCampground);
    
    /*Redirect Back To The Page (.redirect defaults as a 'GET' route)*/
    res.redirect("/campgrounds");
});
/* ============================================================== */


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Version 1 Server Up And Running! Listening On Port " + process.env.PORT);
});