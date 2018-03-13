/*
Colt's Way:

function average(scores) {
    var total = 0; // use this as our 'bucket'
    scores.forEach(function(score){
      total += score;  
    });
    
    var avg = total/scores.length
    return Math.round(avg)
}
*/



/*I used some stuff we haven't technically learned yet, but still does the job*/
function average(arr) {
    var sum = arr.reduce((prev, curr) => prev += curr); // the sum of all numbers in array
    var total = arr.length // the number of items in the array
    // return Math.ceil(sum / total); /*My original way just rounds up*/
    return Math.round(sum / total); // This Will Round Up/Down If Necessary
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); // should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // should return 68