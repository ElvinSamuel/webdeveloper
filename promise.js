var promise = new Promise(function(resolve, reject){
    if (/*Everything turned out fine*/ resolve) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke!"));
    }
});

promise.then(function(result){
    console.log(result); // "Stuff worked!""
}, function(err){
    console.log(err);
})