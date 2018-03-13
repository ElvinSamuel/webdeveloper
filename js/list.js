/*We'll use an array to model our to-do list*/
var toDo = ["Buy new Bugatti"];

/*We'll need to prompt for input now*/
var input = prompt("What would you like to do?");

/*Now we'll need to check user input*/


while(input !== "quit") {
    if(input === "list") {
        console.log(toDo);
    }
    else if (input === "new") {
        var newToDo = prompt("Enter A New To-Do List");
        toDo.push(newToDo);
    }
    /*ask again for new input*/
    input=prompt("What would you like to do?");
}

console.log("Ok, You Quit The App");