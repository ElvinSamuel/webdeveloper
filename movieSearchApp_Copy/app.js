var express = require("express");
var app = express();

var request = require("request");

app.use(express.static("public")); // Point Express to the 'public' folder
app.set("view engine", "ejs"); // Take the endings off the filenames

app.get("/", function(req, res){
   res.render("search"); // bring up the search page 
});

app.get("/results", function(req, res){
   var query = req.query.search;
   var url = "https://www.omdbapi.com/?apikey=thewdb&s=" + query;
   
   request(url, function(error, response, body){
       if (!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
       }
   });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Copy Of Movie App Started! Listening On Port " + process.env.PORT);
})