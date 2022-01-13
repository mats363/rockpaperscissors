let root = document.getElementById("root");
let btn = document.createElement("button");
let btnContainer = document.getElementById("btn-container");
let result = document.createElement("div")
let pointDiv = document.createElement("div");
let p1Points = document.createElement("h2");
let p2Points = document.createElement("h2")
pointDiv.append(p1Points, p2Points);
btn.innerText = "Run Game";

btn.addEventListener("click", runGame);
root.append(btnContainer, result, pointDiv);
btnContainer.append(btn);

let options = ["rock", "paper", "scissors"];


let spriteSheetWidth = 1000;
let spriteSingleWidth = 250;

let spriteSheet = document.getElementById("sprite-image");
spriteSheet.style.backgroundPosition = "0px 0px";

let spriteSheet2 = document.getElementById("sprite-image2");
spriteSheet2.style.backgroundPosition = "-750px 0px";

function runGame() {
    

    let pOne;
    let pTwo;
    let pOneWin = false;
    let pTwoWin = false;
    let pOnePoints = 0;
    let pTwoPoints = 0;
    let round = 0;

    

    


    let game = setInterval(function () {
        pOne = options[getRandom(3)];
        pTwo = options[getRandom(3)];
        round++
        p1Sprite(pOne);
        p2Sprite(pTwo);
        console.log(pOne + " och " + pTwo + " round: " + round);

        if (pOne == "rock" && pTwo == "scissors" || pOne == "scissors" && pTwo == "paper" || pOne == "paper" && pTwo == "rock") {
            pOnePoints++
            console.log("Player one wins round" + pOnePoints);
            //spriteSheet.style.backgroundPosition = "750px 0px";

        } else if (pOne === pTwo) {
            console.log("Oavgjort");
        } else {
            pTwoPoints++
            console.log("Player two wins round" + pTwoPoints);
        }

        if (round == 3) {
            pointCount(pOnePoints, pTwoPoints);
            clearInterval(game);
        }

    }, 1000);


}


function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function pointCount(pOnePoints, pTwoPoints) {
    if (pOnePoints > pTwoPoints) {
        console.log("player One wins it all");
        result.innerText = "player One wins it all";
    } else if (pTwoPoints > pOnePoints) {
        console.log("player Two wins it all");
        result.innerText = "player Two wins it all"
    } else {
        console.log("It's a draw");
        result.innerText = "It's a draw! Play again?"
    }

}





//spriteSheet.style.backgroundPosition = `${position}px 0px`;
//spriteSheet.style.backgroundPosition = `-${p1Position}px 0px`;


function p1Sprite(img) {
    


    switch (img) {
        case "rock":
            console.log("ROCKIMAGE")
            spriteSheet.style.backgroundPosition = "-250px 0px";
            break;
        case "paper":
            console.log("PAPERIMAGE")
            spriteSheet.style.backgroundPosition = "-500px 0px";
            break;
        case "scissors":
            console.log("SCISSORIMAGE")
            spriteSheet.style.backgroundPosition = "-750px 0px";
            break;
    
        default:
            break;
    }
}

function p2Sprite(img) {
   


    switch (img) {
        case "rock":
            console.log("ROCKIMAGE")
            spriteSheet2.style.backgroundPosition = "-500px 0px";
            break;
        case "paper":
            console.log("PAPERIMAGE")
            spriteSheet2.style.backgroundPosition = "-250px 0px";
            break;
        case "scissors":
            console.log("SCISSORIMAGE")
            spriteSheet2.style.backgroundPosition = "0px 0px";
            break;
    
        default:
            break;
    }
}