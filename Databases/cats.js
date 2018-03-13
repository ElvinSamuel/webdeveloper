var mongoose = require("mongoose");

/*To Take Care Of That Pesky "Deprecated" warning*/
mongoose.Promise = global.Promise;

// // Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/cat_app");

/*To take care of the "'open()' is deprecated" warning*/
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

// Tell's The DB What To Expect From Data -- Just Adds Some Structure (You Don't Even Have To Follow It)
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

/*We can make new cats with this "Cat" variable*/
var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

// add it to the database, but handle errors if it can't save (DB might be down or something)
// george.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG!");
//     } else {
//         console.log("We just saved a cat to the database");
//         console.log(cat);
//     }
// }); 


// Retrive all cats from the DB and console.log each one
// Cat.find({}, function(err, cats){
//     if(err){
//         console.log("Error, Nooo!");
//         console.log(err);
//     } else {
//         console.log("All of the Cats...");
//         console.log(cats);
//     }
// })


/*Combines new and .save into one thing:*/
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});