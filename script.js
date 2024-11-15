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

  // Create and style the Game Over message
  const gameOverMessage = document.createElement('p');
  gameOverMessage.textContent = '!!!Game Over!!!';
  gameOverMessage.style.color = 'red';
  gameOverMessage.style.fontWeight = 'bold';

  // Append the Game Over message and reset button inside the guessing game container
  const gameContainer = document.querySelector('.gameContainer'); // Make sure your HTML has a .gameContainer wrapper around guessing elements
  gameContainer.appendChild(gameOverMessage);

  // Create the reset button and add it to the game container
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  gameContainer.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  // Clear previous game messages
  guesses.textContent = '';
  lastResult.textContent = '';
  lowOrHi.textContent = '';
  
  // Remove Game Over message and reset button
  resetButton.remove();
  document.querySelector('.gameContainer p:last-child').remove(); // Removes Game Over message

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

// Clicker game code
let count = 0;
const counterElement = document.getElementById('counter');

function increaseCounter() {
  count++; // Increment the counter
  if (count === 20) {
      alert("wow! you won 10 points");
      count += 10;
  }
  else if (count === 10) {
      const randompoints = Math.floor(Math.random() * 100) + 1;
      count += randompoints;
  }
  counterElement.textContent = count; // Update the counter display
}

function resetCounter() {
  count = 0; // Reset the counter
  counterElement.textContent = count; // Update the counter display
}

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
