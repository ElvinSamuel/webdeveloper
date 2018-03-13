var express = require('express');
var app = express();

// Database is temporarily and array until I set up the database


// Let's me take the 'ejs' off of the ending -- pointing to where the app should look for the views
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7341/16263385388_c3a03df906.jpg"},
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg"}
    ];
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('YelpCamp Server Up & Running');
});