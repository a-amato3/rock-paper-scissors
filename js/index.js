const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

//Player Function.
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner (playerChoice, computerChoice);
    displayWinner (winner, computerChoice);
  //  console.log(playerChoice, computerChoice, winner);
}

// Get Computers Choice.
function getComputerChoice(){
    const random = Math.random();
    if (random < 0.34 ){
        return 'rock';
    } else if(random <= 0.67){
        return 'paper';
    } else {
        return 'scissors'
    }
}

// Return Winner.
function getWinner(p, c) {
    if (p === c) {
      return 'draw';
    } else if (p === 'rock') {
      if (c === 'paper') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'paper') {
      if (c === 'scissors') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'scissors') {
      if (c === 'rock') {
        return 'computer';
      } else {
        return 'player';
      }
    }
  }

  //Display Winner.
  function displayWinner(winner, computerChoice){
      if (winner === 'player'){
          scoreboard.player++;
          //show result computer
          result.innerHTML = `
          <h1 class="text-win">You Win</h1>
          <i class="fas fas-hand-${computerChoice} fa-10x"></i>
          <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + 
            computerChoice.slice(1)}</strong></p>
          `;
      } else if (winner ==='computer'){
        scoreboard.computer++;
        //show result computer
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fas-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + 
            computerChoice.slice(1)}</strong></p>
        `;
      } else {
        result.innerHTML = `
        <h1>Draw</h1>
        <i class="fas fas-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + 
            computerChoice.slice(1)}</strong></p>
        `;
      }

//Show Score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

modal.style.display = 'block';
  }
//Restart Game.
function restartGame(){
scoreboard.player = 0;
scoreboard.computer = 0;
score.innerHTML = `
<p>Player: 0 </p>
<p>Computer: 0 </p>
    `;
}
  
//Close Modal.
function closeModal(e){
    if (e.target == modal){
        modal.style.display = 'none';
    }
}


//Event Listeners.
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', closeModal);
restart.addEventListener('click', restartGame);