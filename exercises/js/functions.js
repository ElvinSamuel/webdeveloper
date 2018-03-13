/*Create a function that determines whether a given number is even*/
console.log("***Even Number Function***");
function isEven(num) {
    console.log(num % 2 === 0);
    return ((num % 2) === 0);
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);

/*Create A Factorial Function*/
console.log("***Factorial Function***");
function factorial(num) {
    /*Let's Define Another Number That We'll Use As Our "Bucket"*/
    var factorialSum = num;
    
    if (num < 0) {
        // console.log("NaN -- No Negative Factorials");
        return "NaN -- No Negative Factorials";
    }
    else if (num === 0){
        /* In Factorial, 0! = 1 */
        console.log(1);
        return 1;
    }
    else {
        while (num > 1) {
            factorialSum = factorialSum * (num - 1);
            num--;
        }
        // console.log(factorialSum);
        return factorialSum;
    }
}

factorial(5);
factorial(2);
factorial(10);
factorial(0);

/* Turning Kebab-Case into Snake_Case Strings*/
console.log("***Kebab To Snake Case Strings***");
function kebabToSnake(kebabString) {
    // console.log(kebabString.replace(/-/g, "_"));
    return kebabString.replace(/-/g, "_");
}

kebabToSnake("hello-world");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");