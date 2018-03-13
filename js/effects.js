$('button').on('click', function() {
    $('div').fadeToggle(1000, function(){
       console.log("This Happens AFTER The 'fadeOUt' Is Complete") 
    });
    /*The Code Below Will Run Even WHILE The 'fadeOut' is happening */
    // console.log("Fade Completed!");
});
