var dice1 = Math.floor((Math.random()*6)+1);
var dice2 = Math.floor((Math.random()*6)+1);

console.log("dice 1: " + dice1);
console.log("dice 2: " + dice2);
switch (dice1) {
    case 1:
        document.querySelector("#dice1").setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelector("#dice1").setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelector("#dice1").setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelector("#dice1").setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelector("#dice1").setAttribute("src", "./images/dice5.png");
        break;
    case 6:
        document.querySelector("#dice1").setAttribute("src", "./images/dice6.png");
        break;
}

switch (dice2) {
    case 1:
        document.querySelector("#dice2").setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelector("#dice2").setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelector("#dice2").setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelector("#dice2").setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelector("#dice2").setAttribute("src", "./images/dice5.png");
        break;
    case 6:
        document.querySelector("#dice2").setAttribute("src", "./images/dice6.png");
        break;
}

if(dice1 < dice2){
    document.querySelector("h1").innerHTML = "Player 2 win! ";
}else if(dice1 > dice2){
    document.querySelector("h1").innerHTML = "Player 1 win! ";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}