var faker = require("faker");

 console.log("==========================\nWelcome To Ye Olde Shoppe!\n==========================")
for(var i = 1; i <= 10; i++){
    /*Pring Out 10 Names & Prices*/
    console.log(faker.commerce.productName() + " -- " +faker.commerce.price());
}