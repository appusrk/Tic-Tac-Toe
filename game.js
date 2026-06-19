const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');

const players = ['X', 'O'];
let currentPlayer = players[0];

let someoneWon = false;

function showPopup(message) {
const popup = document.getElementById("popupMessage");

popup.textContent = message;
popup.style.display = "block";

setTimeout(() => {
    popup.style.display = "none";
}, 1500);

}

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

showPopup("X's Turn");

for (let i = 0; i < squares.length; i++) {

squares[i].addEventListener('click', () => {

    if (someoneWon) return;

    if (squares[i].textContent !== '') {
        return;
    }

    squares[i].textContent = currentPlayer;

    // Winner
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

        showPopup(`${currentPlayer} Wins! 🎉`);
        return;
    }

    // Tie
    if (checkTie()) {

        someoneWon = true;

        let draws = parseInt(localStorage.getItem("draws")) || 0;
        localStorage.setItem("draws", draws + 1);
        localStorage.setItem("lastWinner", "Draw");

        showPopup("Match Tied 🤝");
        return;
    }

    currentPlayer =
        (currentPlayer === players[0])
            ? players[1]
            : players[0];

    if (currentPlayer === 'X') {
        showPopup("X's Turn");
    } else {
        showPopup("O's Turn");
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

showPopup("New Game 🎮");

}
