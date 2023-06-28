/* Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!" */
/* 
Testes 
const Test = require('@codewars/test-compat');

describe('rock paper scissors', function() {
  const getMsg = (n) => `Player ${n} won!`;

  it('player 1 win', function() {
    Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
    Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
    Test.assertEquals(rps('paper', 'rock'), getMsg(1));
  });

  it('player 2 win', function() {
    Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
    Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
    Test.assertEquals(rps('rock', 'paper'), getMsg(2));
  });

  it('draw', function() {
    Test.assertEquals(rps('rock', 'rock'), 'Draw!');
    Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
    Test.assertEquals(rps('paper', 'paper'), 'Draw!');
  });
}); */

const rps = (p1, p2) => {
    const player1 = 1;
    const player2 = 2;
    let winner = 0; 
    let draw = 'Draw!';
    
    if (p1 === p2) {
        winner = draw;
        console.log(draw)
        console.log('Player 1: ' + p1 + ' x ' + 'Player2: ' + p2)
        
    } else {
        if (p1 === 'rock' && p2 === 'scissors') {
            winner = 'Player ' + player1 + ' won!'
            console.log('Player 1: ' + p1 + ' x ' + 'Player2' + p2)
            console.log('winner: ' + winner)
            
        } else{
            if (p1 === 'rock' && p2 === 'paper') {
                winner = 'Player ' + player2 + ' won!'
                console.log('Player 1: ' + p1 + ' x ' + 'Player2' + p2)
                console.log('winner: ' + winner)
            } else {
                if (p1 === 'scissors' && p2 === 'paper') {
                    winner = 'Player ' + player1 + ' won!'
                    console.log('Player 1: ' + p1 + ' x ' + 'Player2' + p2)
                    console.log('winner: ' + winner)
                } else {
                    if (p1 === 'scissors' && p2 === 'rock') {
                        winner = 'Player ' + player2 + ' won!'
                        console.log('Player 1: ' + p1 + ' x ' + 'Player2' + p2)
                        console.log('winner: ' + winner)
                    } else {
                        if (p1 === 'paper' && p2 === 'rock') {
                            winner = 'Player ' + player1 + ' won!'
                            console.log('Player 1: ' + p1 + ' x ' + 'Player2' + p2)
                            console.log('winner: ' + winner)
                        } else {
                            if (p1 === 'paper' && p2 === 'scissor') {
                                winner ='Player ' + player2 + ' won!'
                                console.log('Player 1: ' + p1 + ' x ' + 'Player2' + p2)
                                console.log('winner: ' + winner)
                    }  
                        }
                    }

                }        
            }
        }       
    }
    return winner;
}

/* TESTE DE EMPATE */
let p1 = 'scissors';
let p2 = 'scissors';
rps(p1, p2)
console.log('Validando valor do retorno: ' + rps(p1, p2));

p1 = 'rock';
p2 = 'rock';
rps(p1, p2)
console.log('Validando valor do retorno: ' + rps(p1, p2));

p1 = 'paper';
p2 = 'paper';
rps(p1, p2)
console.log('Validando valor do retorno: ' + rps(p1, p2));

/* TESTE P1 WIN */
p1 = 'rock';
p2 = 'scissors';
rps(p1, p2)
console.log('Validando valor do retorno: ' + rps(p1, p2));

p1 = 'paper';
p2 = 'rock';
rps(p1, p2)
console.log('Validando valor do retorno: ' + rps(p1, p2));

p1 = 'scissors';
p2 = 'paper';
rps(p1, p2)
console.log('Validando valor do retorno: ' + rps(p1, p2));

/* TESTE P2 WIN */
p1 = 'scissors';
p2 = 'rock';
rps(p1, p2)
console.log('Validando valor do retorno: ' + rps(p1, p2));

p1 = 'rock';
p2 = 'paper';
rps(p1, p2)
console.log('Validando valor do retorno: ' + rps(p1, p2));

p1 = 'paper';
p2 = 'scissors';
rps(p1, p2)
console.log('Validando valor do retorno: ' + rps(p1, p2));