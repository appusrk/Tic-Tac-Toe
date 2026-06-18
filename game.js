const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');

const players = ['X', 'O'];
let currentPlayer = players[0];

const endMessage = document.createElement('h2');
endMessage.textContent = `X's turn!`;
endMessage.style.marginTop = '30px';
endMessage.style.textAlign = 'center';

board.after(endMessage);

let someoneWon = false;

const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < squares.length; i++) {

    squares[i].addEventListener('click', () => {

        if (someoneWon) return;

        if (squares[i].textContent !== '') {
            return;
        }

        squares[i].textContent = currentPlayer;

        // Check Winner
        if (checkWin(currentPlayer)) {

            someoneWon = true;

            if (currentPlayer === 'X') {

                let xWins = parseInt(localStorage.getItem("xWins")) || 0;
                localStorage.setItem("xWins", xWins + 1);
                localStorage.setItem("lastWinner", "Player X");

            } else {

                let oWins = parseInt(localStorage.getItem("oWins")) || 0;
                localStorage.setItem("oWins", oWins + 1);
                localStorage.setItem("lastWinner", "Player O");
            }

            endMessage.textContent = `Game over! ${currentPlayer} wins!`;
            return;
        }

        // Check Tie
        if (checkTie()) {

            someoneWon = true;

            let draws = parseInt(localStorage.getItem("draws")) || 0;
            localStorage.setItem("draws", draws + 1);
            localStorage.setItem("lastWinner", "Draw");

            endMessage.textContent = `Game is tied!`;
            return;
        }

        currentPlayer =
            (currentPlayer === players[0])
                ? players[1]
                : players[0];

        if (currentPlayer === players[0]) {
            endMessage.textContent = `X's turn!`;
        } else {
            endMessage.textContent = `O's turn!`;
        }

    });
}

function checkWin(currentPlayer) {

    for (let i = 0; i < winning_combinations.length; i++) {

        const [a, b, c] = winning_combinations[i];

        if (
            squares[a].textContent === currentPlayer &&
            squares[b].textContent === currentPlayer &&
            squares[c].textContent === currentPlayer
        ) {
            return true;
        }
    }

    return false;
}

function checkTie() {

    for (let i = 0; i < squares.length; i++) {

        if (squares[i].textContent === '') {
            return false;
        }
    }

    return true;
}

function restartButton() {

    someoneWon = false;

    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }

    currentPlayer = players[0];
    endMessage.textContent = `X's turn!`;
}            }
            currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 
            if(currentPlayer == players[0]) {
                  endMessage.textContent= `X's turn!`
            } else {
                  endMessage.textContent= `O's turn!`
            }       
      })    
}
function checkWin(currentPlayer) {
      for(let i = 0; i < winning_combinations.length; i++){
            const [a, b, c] = winning_combinations[i]
            if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
                return true
            }
      }
      return false
}
  function checkTie(){
      for(let i = 0; i < squares.length; i++) {
            if(squares[i].textContent === '') {
                  return false;
            }
      }
      return true
}
  function restartButton() {
      someoneWon = false;
      for(let i = 0; i < squares.length; i++) {
            squares[i].textContent = ""
      }
      endMessage.textContent=`X's turn!`
      currentPlayer = players[0]
}
            
