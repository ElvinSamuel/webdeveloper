var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");
    
mongoose.connect("mongodb://localhost/resful_blog_app");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

/*The Date Will Default To The Current Date (If/When none is added)*/
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title: "Test Doge",
    image: "https://herepup.com/wp-content/uploads/2016/07/Pitbull-Husky-Mix-2.jpg",
    body: "Hello, this is a rare pupper"
});

// RESTful Routes



/*Title
  Image
  Body
*/

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Is Running");
});