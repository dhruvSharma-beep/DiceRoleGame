'use strict';

let player0el = document.querySelector('.player--0');
let player1el = document.querySelector('.player--1');
let score0el = document.querySelector('#score--0');
let score1el = document.getElementById('score--1');
let diceel = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
let current0el = document.getElementById('current--0');
let current1el = document.getElementById('current--1');


let scores,activePlayer,playing;

let init = function() {
         scores = [0,0];
         currentScore = 0;
         activePlayer = 0;
         playing = true;
        
        

        diceel.classList.add('hidden');
        score0el.textContent = '0';
        score1el.textContent = '0';
        current0el.textContent = 0;
        current1el.textContent = 0;
        player1el.classList.remove('player--winner');
        player0el.classList.remove('player--winner');
        player0el.classList.add('player--active');
        player1el.classList.remove('player--active');

};
init();

const switchPlayer = function(){
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0 ; 
        player0el.classList.toggle('player--active');
        player1el.classList.toggle('player-active');
}

btnHold.addEventListener('click', function(){
        if(playing){
       
        scores[activePlayer] += currentScore;
        diceel.classList.add('hidden');
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 100){
                playing = false;
                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }else{
        switchPlayer();
        }
        }
});

btnRoll.addEventListener('click', function(){
        if(playing){
        let dice = Math.trunc(Math.random()* 6) +1;

        diceel.classList.remove('hidden');
        diceel.src = `dice-${dice}.png`;


        if(dice !== 1 ){
                currentScore += dice;
                document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        }else{
                switchPlayer();
               
        }
        }
});
btnNew.addEventListener('click', init);