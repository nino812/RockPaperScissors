let userScore = 0;
let compScore = 0;
const btns = document.querySelectorAll('button');

function disableButtons() {
    btns.forEach(elem => {
        elem.disabled = true
    })
}
function refreshPage() {
    window.location.reload(true);
}
function reset(){

    let body = document.querySelector('body');
  
         let reset = document.createElement('button');
         reset.className = 'btn';
         reset.textContent='Play Again';
         body.appendChild(reset);
         btns.forEach((btn) => btn.removeEventListener('click',event => { playRound(event.target.value,getComputerChoice())}));
         reset.addEventListener('click', refreshPage);
     }

function getComputerChoice(){
    let Choices = ["Rock","Paper","Scissors"];
    let computerChoice = Choices[Math.floor(Math.random() * Choices.length)];
    return computerChoice;
}
function playRound(playerSelection, computerSelection){
    let content = document.querySelector('#result');
    let result='';
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        userScore++;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + userScore + "<br>Computer score: " + compScore);

        if (userScore == 5) {
            result += '<br><br>You won the game! <br>';
            reset();
            disableButtons();
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + userScore + "<br>Computer score: " + compScore);
    }
    else {
        compScore++;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + userScore + "<br>Computer score: " + compScore);

        if (compScore == 5) {
            result += '<br><br>I won the game!<br>';
            reset();
            disableButtons();
        }
    }

    content.innerHTML = result
    return
}

    

btns.forEach((btn) => btn.addEventListener('click',event => { playRound(event.target.value,getComputerChoice())}));

    
 