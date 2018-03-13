var express = require("express");
var app = express();
/*Add In The Request Package*/
var request = require("request");

/*Add A CSS Page*/
app.use(express.static("public"));

/*Add The EJS Shortcut*/
app.set("view engine", "ejs");

/*Let's Have The Search Page Be Our Home Page*/
app.get("/", function(req, res){
   res.render("search"); 
});

app.get("/results", function(req, res){
    var query = req.query.search;
    /*Cleaner Way To Concat The Var W/ String*/
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;
    
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200){
            // res.send(body); // remember, this is a STRING
            var data = JSON.parse(body);
            // res.send(results["Title"]);
            res.render("results", {data: data});
        }
    });
});

/*Don't Forget To Listen To Our App*/
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App Started! Listening On Port " + process.env.PORT);
});