var pl1Name=prompt("Please Enter Player 1 Name: ");
var pl2Name=prompt("Please Enter Player 2 Name: ");
var selectToss = prompt('Select Options head or tail');
var namePl1 = document.getElementById('player1');
var namepl2= document.getElementById('player2');
namePl1.innerText=pl1Name;
namepl2.innerText=pl2Name;
console.log(pl2Name)
console.log(namepl2)
firstTurn ="";
 player1= false;
 player2 = false;
var headCoin = "head";
var tailCoin = "tail";  
btnPlayer2Dice.disabled = true
btnPlayer1Dice.disabled = true
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
// toss=0;

function tossFunc() {
    if(toss==0){
        firstTurn = headCoin;
        btnPlayer2Dice.disabled= true;
        btnPlayer1Dice.disabled= false;
        tossElm.innerHTML= "Toss Win "+ pl1Name;
    }
    else{
        firstTurn = tailCoin;
        console.log("First Turn",firstTurn)
        btnPlayer1Dice.disabled= true
        btnPlayer2Dice.disabled= false;
        // tossElm.innerHTML="Toss:"+firstTurn;
        tossElm.innerHTML= "Toss Win "+ pl1Name;
       
    }

}
var dice1ElmP1 = document.getElementById('pl1Dice1');
var dice2ElmP1 = document.getElementById('pl1Dice2');


var winPlayer = document.getElementById('winner');
var divToss= document.getElementById('toss-div');
function diceRoll1() {

    var diceRollNum1= Math.floor(Math.random()*6+1);
    var diceRollNum2= Math.floor(Math.random()*6+1);
    // var diceRollNum1= 6;
    // var diceRollNum2= 6;
    dice1ElmP1.innerHTML= diceRollNum1;
    dice2ElmP1.innerHTML= diceRollNum2;
    divToss.setAttribute('class','display-none');
    if(diceRollNum1===6 && diceRollNum2===6)
    {
        alert('Win ');
        btnPlayer2Dice.disabled = true
        btnPlayer1Dice.disabled = true
        winPlayer.innerHTML= 'Winner is Player 1'
    }
    else{
       
        btnPlayer2Dice.disabled = false;
        btnPlayer1Dice.disabled = true
    }
  

}
var dice1ElmP2 = document.getElementById('pl2dice1');
var dice2ElmP2 = document.getElementById('pl2dice2');

function diceRoll2() {
   
    divToss.setAttribute('class','display-none');
    var diceRollNum1= Math.floor(Math.random()*6+1);
    var diceRollNum2= Math.floor(Math.random()*6+1);
    // var diceRollNum1= 6;
    // var diceRollNum2= 6;
    dice1ElmP2.innerHTML= diceRollNum1;
    dice2ElmP2.innerHTML= diceRollNum2;
    console.log(dice1ElmP2, diceRollNum1)
    console.log(dice2ElmP2 ,diceRollNum2)
    if(diceRollNum1===6 && diceRollNum2===6)
        {
            alert('Win');
        btnPlayer2Dice.disabled = true
        btnPlayer1Dice.disabled = true
        
        winPlayer.innerHTML='Winner is Player 2';
            
        }
        else{
           
            btnPlayer2Dice.disabled = true
            btnPlayer1Dice.disabled = false;
          
        }
   
}

