var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

/*Connect to database*/
mongoose.connect("mongodb://localhost/yelp_camp");

/*Schema Setup*/
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
//         description: "This Is A Huge Granite Hill (Not Pictured). It's Gonna Be Huge. Really Big."
        
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly Created Campground!");
//             console.log(campground);
//         }
// });

/*Temporarily Storing Our Data In An Array (Until I Add The Database)*/

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
    // Get all campgrounds from the DB
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: allcampgrounds});
        }
    });
    
    
    // res.render("campgrounds", {campgrounds: campgrounds});
});




/*This Is Where The Form Will Stay*/
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});




/*Add Our 'Show' Route*/
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            // render the show template
            res.render("show", {campground: foundCampground});
        }
    });
});






/*Multiple Request Types (Get, Post, Delete, etc.) Can Have The Same Route Name*/
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    // redirect back to the campgrounds page
    
    /*This Is The Importance Of 'body-parser' -- It Let's You Access Content From The Page Itself*/
    var name = req.body.name,
        image = req.body.image,
        desc = req.body.description;
    
    /*Pushing That Data Into A New Array First*/
    var newCampground = { name: name, image: image, description: desc }
    // campgrounds.push(newCampground);
    
    /*Create a new campground and save it to the new DB*/
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});
/* ============================================================== */









app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Version 1 Server Up And Running! Listening On Port " + process.env.PORT);
});