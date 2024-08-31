let humanScore=document.querySelector('#human-score');
let computerScore=document.querySelector('#computer-score');
const comp_icon=document.querySelector('.computer-icon')
const human_icon=document.querySelector('.human-icon')
const result=document.querySelector('.text-2')
const winner=document.querySelector('.text-1')
const choice=['rock','paper','scissors']
const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissors=document.getElementById('scissors');
let humanscore=0,computerscore=0,tiescore=0;
function playround(playerchoice) {
    let computer_choice=choice[Math.round((Math.random() *( Math.abs(2 - 0))) + 0)];
    showemoji(playerchoice,computer_choice);
    if((playerchoice==='paper'&&computer_choice==='rock') ||
    (playerchoice==='scissors' && computer_choice==='paper') || (playerchoice==='rock' && computer_choice==='scissors'))
  {
    humanscore++;
    humanScore.textContent=`Human:${humanscore}`;
    result.textContent=`You won! ${playerchoice} beats ${computer_choice}`;
  }
  else if(playerchoice===computer_choice) {tiescore++;
    result.textContent="it's a tie";
  }
  else {
   computerscore++;
   computerScore.textContent=`Computer:${computerscore}`
   result.textContent=`You lost! ${computer_choice} beats ${playerchoice}`;
  }
  if(humanscore+computerscore+tiescore===5 && humanscore>computerscore) {
    winner.textContent='You have won the game';
    result.textContent='Please refresh the page to play again';
  }
 else if(humanscore+computerscore+tiescore===5 && humanscore<computerscore) {
    winner.textContent='You have lost the game';
    result.textContent='Please refresh the page to play again';
    
  }
  else if(humanscore+computerscore+tiescore===5 && humanscore===computerscore) {
    winner.textContent="It's a tie";
    result.textContent='Please refresh the page to play again';
  }
  const all=document.querySelectorAll('.prasid');
  if(humanscore+computerscore+tiescore>=5) {
    all.forEach(box=> {
      box.addEventListener('click',()=> {
        alert('Refresh the page to play again');
      })
    })
  
  }
}
function showemoji(player,computer) {

        if (player === 'rock') {
            human_icon.textContent = '✊';
        } else if (player === 'paper') {
            human_icon.textContent = '✋';
        } else if (player === 'scissors') {
            human_icon.textContent = '✌️';
        }
    
        if (computer === 'rock') {
            comp_icon.textContent = '✊';
        } else if (computer === 'paper') {
            comp_icon.textContent = '✋';
        } else if (computer === 'scissors') {
            comp_icon.textContent = '✌️';
        }
    }
    rock.addEventListener('click', () => playround('rock'));
    paper.addEventListener('click', () => playround('paper'));
    scissors.addEventListener('click', () => playround('scissors'));
  