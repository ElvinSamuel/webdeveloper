/*
Create an array of movie objects. 
Each movie should have a title (string), rating (#), 
and hasWatched (Boolean) properties. 
Iterate through the array and print out something 
that looks like the following: 

   You have seen "In Bruges" - 5 stars
   You have not seen "Frozen" - 4.5 stars
   You have seen "Mad Max: Fury Road" - 5 stars
   You have not seen "Les Miserables" - 3.5 stars
*/

/*=======================================================*/

/*Plan: Let's first get that array of objects*/
/*          [{ }, { }, { }, { }]        */

var movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max: Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
];

/*Now let's handle the iteration part.*/
movies.forEach(function(movie){
    if (movie.hasWatched === true) {
        console.log("You have seen "+ "\"" + movie.title + "\"" + " - " + movie.rating + " stars");
    } else {
        console.log("You have not seen "+ "\"" + movie.title + "\"" + " - " + movie.rating + " stars");
    }
})

/*
=======
Notes: 
=======
    1) The Biggest Step In This Is The ".forEach()" loop.
    2) The console.log can get tricky, but is straightforward for the most part
    3) I didn't get an error with this, but watch out for iterating WITH a control flow in the function
    4) Great exercise overall, got a chance to use something really useful
=======
*/