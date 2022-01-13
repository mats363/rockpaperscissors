let root = document.getElementById("root");
let btn = document.createElement("button");
let btnContainer = document.getElementById("btn-container");
let result = document.createElement("div")
let pointDiv = document.createElement("div");
let p1Points = document.createElement("h2");
let p2Points = document.createElement("h2")
pointDiv.append(p1Points, p2Points);
btn.innerText = "Run";

btn.addEventListener("click", runGame);
root.append(btnContainer, result, pointDiv);
btnContainer.append(btn);

let spriteWidth = 1000;
let spriteSingleWidth = 250;

let p1Sprite = document.getElementById("p1Sprite");
//p1Sprite.style.backgroundPosition = "-750px 0px";

let p2Sprite = document.getElementById("p2Sprite");
//p2Sprite.style.backgroundPosition = "-750px 0px";


let options = [
    {
        id: "rock",
        image: "-500px 0px",
    },
    {
        id: "paper",
        image: "-250px 0px",
    },
    {
        id: "scissors",
        image: "0px 0px",
    }
    
];


let round = 0;
let pOne;
let pTwo;
let pOneWin = false;
let pTwoWin = false;
let pOnePoints = 0;
let pTwoPoints = 0;


function runGame() {


    p1Sprite.style.backgroundPosition = "-750px 0px";
    p2Sprite.style.backgroundPosition = "-750px 0px";

    //round++


    let game = setInterval(function () {
        pOne = options[getRandom(3)];
        pTwo = options[getRandom(3)];
        round++
        
        p1Sprite.style.backgroundPosition = pOne.image;
        p2Sprite.style.backgroundPosition = pTwo.image;
  
        console.log(pOne.id + " " +  pOne.image + " och " + pTwo.id + " " + pTwo.image + " " + " round: " + round);

        if (pOne.id == "rock" && pTwo.id == "scissors" || pOne.id == "scissors" && pTwo.id == "paper" || pOne.id == "paper" && pTwo == "rock") {
            pOnePoints++
            //console.log("Player one wins round" );

        } else if (pOne.id === pTwo.id) {
            //console.log("Oavgjort");
        } else {
            pTwoPoints++
            //console.log("Player two wins round ");
        }
        clearInterval(game);

    }, 1000);

console.log("Round: " + round)
console.log("Player 1 points: " + pOnePoints)
console.log("Player 2 points: " + pTwoPoints)

if (round == 2) {
    pointCount(pOnePoints, pTwoPoints);
    clearInterval(game);
    pOnePoints = 0;
    pTwoPoints = 0;
    round = 0;
}
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
    } 


}





//p1Sprite.style.backgroundPosition = `${position}px 0px`;
//p1Sprite.style.backgroundPosition = `-${p1Position}px 0px`;
/*

function p1Sprite(img) {



    switch (img) {
        case "rock":
            console.log("ROCKIMAGE")
            p1Sprite.style.backgroundPosition = "-250px 0px";
            break;
        case "paper":
            console.log("PAPERIMAGE")
            p1Sprite.style.backgroundPosition = "-500px 0px";
            break;
        case "scissors":
            console.log("SCISSORIMAGE")
            p1Sprite.style.backgroundPosition = "-750px 0px";
            break;

        default:
            break;
    }
}

function p2Sprite(img) {



    switch (img) {
        case "rock":
            console.log("ROCKIMAGE")
            p2Sprite.style.backgroundPosition = "-500px 0px";
            break;
        case "paper":
            console.log("PAPERIMAGE")
            p2Sprite.style.backgroundPosition = "-250px 0px";
            break;
        case "scissors":
            console.log("SCISSORIMAGE")
            p2Sprite.style.backgroundPosition = "0px 0px";
            break;

        default:
            break;
    }
}

*/