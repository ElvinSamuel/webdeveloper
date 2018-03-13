var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/cats_app');

var Cat = mongoose.model('Cat', {
    name: String,
    breed: String,
    age: Number
});

var furball =  new Cat({
    name: 'Sildjian',
    breed: 'Maine Coon',
    age: 3
});

furball.save(function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});