/*Game Basics*/
var gameOver = false;
var winningScore = 5;
var resetButton = document.getElementById("reset");
var scoreTo = document.querySelector('input[type=number]'); /*Don't have to do the type since we only have one input*/
var winningScoreDisplay = document.querySelector("p span");
var input = document.querySelector("input")

/*Player 1 Stuff*/
var p1Button = document.querySelector("#player1");
var p1Score = 0; //Start off at zero
var p1Display = document.querySelector("#p1Display")

p1Button.addEventListener("click", function(){
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});


/*Player 2 Stuff*/
var p2Button = document.getElementById("player2");
var p2Score = 0;
var p2Display = document.querySelector("#p2Display");

p2Button.addEventListener("click", function(){
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
})

scoreTo.addEventListener("change", function(){
    winningScoreDisplay.textContent = input.value;
    winningScore = Number(input.value);
    
    /*Below: To Avoid Lowering The Score To Below The Current Score*/
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    
    gameOver = false;
}