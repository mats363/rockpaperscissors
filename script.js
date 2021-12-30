let root = document.getElementById("root");
let btn = document.createElement("button");
btn.innerText = "Run Game";

btn.addEventListener("click", runGame);
root.append(btn);

let options = ["rock", "paper", "scissors"];

function runGame() {
    let pOne;
    let pTwo;
    let pOneWin = false;
    let pTwoWin = false;
    let pOnePoints = 0;
    let pTwoPoints = 0;

    let game = setInterval(function () {
        pOne = options[getRandom(3)];
        pTwo = options[getRandom(3)];
        console.log(pOne + " och " + pTwo);

        if (pOne == "rock" && pTwo == "scissors" || pOne == "scissors" && pTwo == "paper" || pOne == "paper" && pTwo == "rock") {
            pOnePoints++
            console.log("Player one wins" + pOnePoints);
        } else if (pOne === pTwo) {
            console.log("Oavgjort");
        } else {
            pTwoPoints++
            console.log("Player two wins" + pTwoPoints);
        }

        if (pOnePoints == 2 || pTwoPoints == 2) {
            clearInterval(game);
            console.log("någon vinner")
        }
        
    }, 1000);

    
}


function getRandom(max) {
    return Math.floor(Math.random() * max);
}

