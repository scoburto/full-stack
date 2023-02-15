let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// helper functions
function getAbsoluteDistance(a,b) {return Math.abs(a-b);}

// game functions
var generateTarget = () => {return Math.floor(Math.random() * 10)}

function compareGuesses(humanGuess,compGuess,target) {
    if (humanGuess > 9 || humanGuess < 0) {window.alert('The number selected is out of range! Try 0-9.'); return;}
    let humanOff = getAbsoluteDistance(humanGuess,target);
    let compOff = getAbsoluteDistance(compGuess,target);
    if (humanOff === compOff) {return true;} //human breaks ties
    else if (humanOff < compOff) {return true;} //human wins
    else {return false}                         //computer wins
}

function updateScore(roundWinner) {
    switch (roundWinner) {
        case 'human': {humanScore++; break;}
        case 'computer': {computerScore++; break;}
        default: {break;}
    }
    return;
}

var advanceRound = () => {currentRoundNumber++; return;}

// for testing purposes
// var currentTarget = generateTarget();
// console.log(`target: ${currentTarget}`);
// var roundWinner = compareGuesses(4,8,currentTarget)
// console.log(`My guess was 4 and computer's guess was 8, so I was the winner? ${roundWinner}`);
// if (roundWinner) {
//     updateScore('human');
// } else {updateScore('computer')};
// console.log(`Current scores:\nHuman: ${humanScore}\nComputer: ${computerScore}\n`)
// advanceRound();
// console.log(`Now the round number is: ${currentRoundNumber}`);