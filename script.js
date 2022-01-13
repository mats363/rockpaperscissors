let root = document.getElementById("root");
let btn = document.createElement("button");
let pointDiv = document.getElementById("point-container");
let btnContainer = document.getElementById("btn-container");
let resultContainer = document.createElement("div");
resultContainer.id = "result-container";
let showRound = document.getElementById("round");
showRound.innerText = "READY?";

let p1Points = document.createElement("h2");
let p2Points = document.createElement("h2")
p1Points.innerText = "Player One ";
p2Points.innerText = "Player Two ";
pointDiv.append(p1Points, p2Points);
btn.innerText = "Play round";

btn.addEventListener("click", run);
root.append(pointDiv, btnContainer);
btnContainer.append(btn);

let spriteWidth = 1000;
let spriteSingleWidth = 250;

let p1Sprite = document.getElementById("p1Sprite");
p1Sprite.style.backgroundPosition = "-750px 0px";

let p2Sprite = document.getElementById("p2Sprite");
p2Sprite.style.backgroundPosition = "-750px 0px";

let startImage = ["500px 0px", "-500px 0px", "-750px 0px"]


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


function run() {
    p1Sprite.style.backgroundColor = "white";
    p2Sprite.style.backgroundColor = "white";
    p1Sprite.style.backgroundPosition = "-750px 0px";
    p2Sprite.style.backgroundPosition = "-750px 0px";
    p1Points.innerText = pOnePoints;
    p2Points.innerText = pTwoPoints;
    round++
    showRound.innerText = `Round: ${round}/3`;
    let countDown = 0;
    let game = setInterval(function () {
        countDown++
        p1Sprite.style.backgroundPosition = startImage[countDown];
        p2Sprite.style.backgroundPosition = startImage[countDown];

        if (countDown == 3) {
            clearInterval(game);
            runGame();
        }
    }, 500)

}

function runGame() {
    pOne = options[getRandom(3)];
    pTwo = options[getRandom(3)];
    //round++

    p1Sprite.style.backgroundPosition = pOne.image;
    p2Sprite.style.backgroundPosition = pTwo.image;

    console.log(pOne.id + " " + pOne.image + " och " + pTwo.id + " " + pTwo.image + " " + " round: " + round);

    if (pOne.id == "rock" && pTwo.id == "scissors" || pOne.id == "scissors" && pTwo.id == "paper" || pOne.id == "paper" && pTwo.id == "rock") {
        pOnePoints++
        p1Sprite.style.backgroundColor = "green";
        p2Sprite.style.backgroundColor = "red";

    } else if (pOne.id === pTwo.id) {
        p1Sprite.style.backgroundColor = "lightgray";
        p2Sprite.style.backgroundColor = "lightgray";
    } else {
        pTwoPoints++
        p1Sprite.style.backgroundColor = "red";
        p2Sprite.style.backgroundColor = "green";

    }

    p1Points.innerText = pOnePoints;
    p2Points.innerText = pTwoPoints;

    console.log("Round: " + round)
    console.log("Player 1 points: " + pOnePoints)
    console.log("Player 2 points: " + pTwoPoints)

    if (round == 3) {
        let counter = 0;
        let calculate = setInterval(function () {
            counter++
            if (counter == 1) {
                pointCount(pOnePoints, pTwoPoints);

                pOnePoints = 0;
                pTwoPoints = 0;
                round = 0;
            }
        }, 1000)

    }
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

let resultHead = document.createElement("h3");
resultHead.id = "result-head";

resultContainer.addEventListener("click", function () {
    resultContainer.remove()
    pOnePoints = 0;
    pTwoPoints = 0;
    round = 0;
})

resultContainer.append(resultHead);

function pointCount(pOnePoints, pTwoPoints) {
    if (pOnePoints > pTwoPoints) {
        console.log("player One wins it all");
        root.append(resultContainer)
        resultHead.innerText = "PLAYER ONE IS THE WINNER!";
    } else if (pTwoPoints > pOnePoints) {
        console.log("player Two wins it all");
        root.append(resultContainer)
        resultHead.innerText = "PLAYER TWO IS THE WINNER!"
    } else {
        root.append(resultContainer)
        resultHead.innerText = "IT'S A DRAW!"
    }


}

