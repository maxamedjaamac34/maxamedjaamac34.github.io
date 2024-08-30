

         // JavaScript for smooth scrolling between sections
         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });


  
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');

  const guessSubmit = document.querySelector('.guessSubmit');
  const guessField = document.querySelector('.guessField');

  let guessCount = 1;
  let resetButton;

  function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!Game Over!!!';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor = 'red';
      if (userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

  guessSubmit.addEventListener('click', checkGuess);



  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }


  function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    resetParas.forEach(para => para.textContent = '');

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
  }





//clicker game


  let count = 0;
  const counterElement = document.getElementById('counter');

  function increaseCounter() {
      count++; // Increment the counter
      if(count === 20){
          alert("wow! you won 10 points");
          count += 10;
      }
      else if (count ===10){
          const randompoints = Math.floor(Math.random() * 100) + 1;
          count += randompoints;
      }
      counterElement.textContent = count; // this to update the counter display
  }
  function resetCounter() {
      count = 0; // this resets the counter
      counterElement.textContent = count; //this also to update the counter
  }

  //tic-tac-toe game


  const cells = document.querySelectorAll('.cell');
  const statusText = document.querySelector('.status');
  const restartButton = document.getElementById('restartButton');
  let currentPlayer = 'X';
  let board = ['', '', '', '', '', '', '', '', ''];
  let gameActive = true;
  
  const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];
  
  function handleCellClick(event) {
      const cell = event.target;
      const cellIndex = parseInt(cell.getAttribute('data-index'), 10);
  
      if (board[cellIndex] !== '' || !gameActive) return;
  
      updateCell(cell, cellIndex);
      checkWinner();
  }
  
  function updateCell(cell, index) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
  }
  
  function checkWinner() {
      let roundWon = false;
  
      for (let i = 0; i < winningConditions.length; i++) {
          const condition = winningConditions[i];
          const a = board[condition[0]];
          const b = board[condition[1]];
          const c = board[condition[2]];
  
          if (a === '' || b === '' || c === '') continue;
  
          if (a === b && b === c) {
              roundWon = true;
              break;
          }
      }
  
      if (roundWon) {
          statusText.textContent = `${currentPlayer} wins!`;
          gameActive = false;
          return;
      }
  
      if (!board.includes('')) {
          statusText.textContent = "It's a draw!";
          gameActive = false;
          return;
      }
  
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusText.textContent = `It's ${currentPlayer}'s turn`;
  }
  
  function restartGame() {
      currentPlayer = 'X';
      board = ['', '', '', '', '', '', '', '', ''];
      gameActive = true;
      statusText.textContent = `It's ${currentPlayer}'s turn`;
      cells.forEach(cell => cell.textContent = '');
  }
  
  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  restartButton.addEventListener('click', restartGame);
  
  statusText.textContent = `It's ${currentPlayer}'s turn`;
  




// Dynamic year in the footer
document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
