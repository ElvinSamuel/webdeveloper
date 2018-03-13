/*Problem 1*/
console.log("***Problem 1***");
var num1 = -10;
while (num1 <= 19){
    console.log(num1);
    num1++; /*Increment it*/
}

/*Problem 2*/
console.log("***Problem 2***");
var num2 = 10;
while (num2 <= 40) {
    console.log(num2);
    num2 += 2;
}

/*Problem 3*/
console.log("***Problem 3***");
var num3 = 300 + 1; /*Starting off with the odd here*/
while (num3 <= 333) {
    console.log(num3);
    num3 += 2;
}

/*Problem 4*/
console.log("***Problem 4***");
var num4 = 5; 
while (num4 <= 50) {
    if (!(num4 % 3) && !(num4 % 5)) {
        console.log(num4)
    }
    num4++;
}