/*Let's Make A Request For A Website From A File (Not Through A Browser)*/

/*
Note: Didn't know that I didn't need the package.json to then use a package. 
You can just install the package and call it from the same level.
*/
var request = require("request");
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){
    if(!error && response.statusCode == 200) {
        /*The response is a STRING when it returns. We want to change it back*/
        var parsedData = JSON.parse(body);
        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
    }
});