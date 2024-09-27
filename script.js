let humanScore=document.querySelector('#human-score');
let computerScore=document.querySelector('#computer-score');
const comp_icon=document.querySelector('.computer-icon')
const human_icon=document.querySelector('.human-icon')
const result=document.querySelector('.text-2')
const cont=document.querySelector('.content')
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
  if(humanscore+computerscore+tiescore===10 && humanscore>computerscore) {
    winner.textContent='You have won the game';
  }
 else if(humanscore+computerscore+tiescore===10 && humanscore<computerscore) {
    winner.textContent='You have lost the game';    
  }
  else if(humanscore+computerscore+tiescore===10 && humanscore===computerscore) {
    winner.textContent="It's a tie";
  }
  const all=document.querySelectorAll('.prasid');
  const rest=document.createElement('button')
  rest.classList.add('restart')
    if(humanscore+computerscore+tiescore>=10) {
      all.forEach((item)=> {
        item.style.pointerEvents='none'
      })
      reset(rest,cont,all)
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
    if(humanscore+computerscore+tiescore!==10) {
    rock.addEventListener('click', () => playround('rock'));
    paper.addEventListener('click', () => playround('paper'));
    scissors.addEventListener('click', () => playround('scissors'));
    }
  function reset(child,parent,dis) {
    child.setAttribute("style", "margin-left: 45%; margin-top: 15px; font-size: 25px; height: 60px; width: 90px; color: white; background-color: blue;");
    child.textContent = 'Reset';    
    parent.appendChild(child);
    child.addEventListener('click',()=> {
      window.location.reload()
    })
    }
    