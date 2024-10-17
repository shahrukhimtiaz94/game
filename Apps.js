var selectToss = prompt('Select Options head or tail');
firstTurn ="";
 player1= false;
 player2 = false;
var headCoin = "head";
var tailCoin = "tail";  
 if(selectToss==="head"){
    player1 = headCoin;
    player2 = tailCoin;
}
    
else {
    player2 = headCoin;
    player1 = tailCoin;
}

var toss = Math.floor(Math.random()*2);
btnPlayer1Dice = document.getElementById('btnPlayer1Dice')
btnPlayer2Dice = document.getElementById('btnPlayer2Dice')
var tossElm = document.getElementById('tossElement');
function tossFunc() {
    if(toss==0){
        firstTurn = headCoin;
        console.log("First Turn",firstTurn)
        btnPlayer2Dice.setAttribute('disabled', '');
        // btnPlayer2Dice.disabled = true;
        tossElm.innerHTML= "Toss:"+firstTurn;
    }
    else{
        firstTurn = tailCoin;
        console.log("First Turn",firstTurn)
        btnPlayer1Dice.setAttribute('disabled', '');
        tossElm.innerHTML="Toss:"+firstTurn;
        // btnPlayer1Dice.disabled = true;
    }

}
count= 5
var dice1Elm = document.getElementById('dice1');
var dice2Elm = document.getElementById('dice2');

function diceRoll1() {
    
    for(var i=0 ; i < 10 ; i++){
        var diceRollNum1= Math.floor(Math.random()*6+1);
        var diceRollNum2= Math.floor(Math.random()*6+1);
        console.log(diceRollNum1);
        dice1Elm.innerHTML= diceRollNum1;
        dice2Elm.innerHTML= diceRollNum2;
        console.log(diceRollNum1);
        console.log(diceRollNum2);
        if(diceRollNum1===6 && diceRollNum2===6)
        {
            console.log("Player 1 Winner");
            break
        }
        
    }

}
function diceRoll2() {
    
    for(var i=0 ; i < 10 ; i++){
        var diceRollNum1= Math.floor(Math.random()*6+1);
        var diceRollNum2= Math.floor(Math.random()*6+1);
        console.log(diceRollNum1);
        dice1Elm.innerHTML= diceRollNum1;
        dice2Elm.innerHTML= diceRollNum2;
        console.log(diceRollNum1);
        console.log(diceRollNum2);
        if(diceRollNum1===6 && diceRollNum2===6)
        {
            console.log("Player 1 Winner");
            break
        }
        
    }

}

