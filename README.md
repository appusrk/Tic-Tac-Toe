🎮 Tic Tac Toe Web Application

Project Overview

This project is a responsive Tic Tac Toe game developed using HTML, CSS, and JavaScript. The application allows two players to play the classic Tic Tac Toe game in a user-friendly interface. It also includes a scoreboard feature to track game statistics and a theme toggle option for enhanced user experience.

Features

Home Page

- Responsive landing page
- Navigation to Game Page and Scoreboard
- Theme Toggle (Light/Dark Mode)

Game Page

- Interactive Tic Tac Toe board
- Two-player gameplay (X and O)
- Winner detection
- Draw detection
- Restart/Play functionality
- Popup notifications for:
  - Game start
  - Player turns
  - Winner announcement
  - Draw announcement
- Prevents gameplay before starting
- Disables board interaction after game completion

Scoreboard Page

- Displays:
  - Total Games Played
  - Player X Wins
  - Player O Wins
  - Draw Matches
  - Last Winner
- Statistics stored using Local Storage
- Reset Statistics option

Responsive Design

- Mobile-friendly layout
- Flexible navigation and game interface
- Consistent styling across pages

Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API

Project Structure

project-folder/
│
├── index.html
├── tictactoe.html
├── score.html
├── style.css
├── styles.css
├── game.js
└── README.md

How to Run

1. Download or clone the project.
2. Open "index.html" in a web browser.
3. Navigate to the Game page.
4. Click the Play/Restart button to start the game.
5. Play and view statistics on the Scoreboard page.

Game Rules

1. The game is played between two players: X and O.
2. Players take turns marking empty squares.
3. The first player to align three symbols horizontally, vertically, or diagonally wins.
4. If all squares are filled without a winner, the game ends in a draw.

Future Enhancements

- Single-player mode with AI opponent
- Sound effects and animations
- Online multiplayer support
- Leaderboard system
- Game history tracking

Author

Developed as a demonstration project using HTML, CSS, and JavaScript.
