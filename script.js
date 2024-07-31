let randomnumber = Math.floor(Math.random() * 100) + 1;

function makeGuess() {
    const userGuess = document.getElementById('guess-input').value;
    const message = document.getElementById('message');
    if(userGuess ==randomnumber){
        message.textContent = "Congratulations! You guessed the correct number!";
        message.style.color = 'green';
        resetGame();
    }else if(userGuess > randomnumber) {
        message.textContent = 'Too high buddy! try again';
        message.style.color = 'red';
    }else if(userGuess  < randomnumber) {
        message.textContent = 'Too low buddy! try again';
        message.style.color = 'red';
    }
}
function resetGame(){
    randomnumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guess-input').value ='';
}