let randomNumber = Math.floor((Math.random() * 100) + 1)
const submit = document.querySelector('#subt')
const guessField = document.querySelector('#guessField');
const button = document.createElement('button');
const wrapper = document.querySelector('#wrapper')
const guesses=document.querySelector('.guesses');
const lowOrHi=document.querySelector('.lowOrHi')
let nGuess = [];
let guessRemaining = 10;
const GuessR = document.querySelector('.lastResult')
console.log(GuessR.innerHTML);

console.log(randomNumber);

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let guess = parseInt(guessField.value)
    console.log(guess);
    validateGuess(guess);
})


function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage(`Enter a valid Number`);
    }
    else if (guess < 1) {
        displayMessage(`Please enter number between 1 to 100`);
    }
    else if (guess > 100) {
        displayMessage(`Please enter number between 1 to 100`)
    }
    else {
        if (guessRemaining<1) {
            endGame()
        }
        else {
            guessRemaining--;
            GuessR.innerHTML = `${guessRemaining}`
            nGuess.push(guess);
            guesses.innerHTML=guesses.innerHTML+` ${guess} ,`
            CheckGuess(guess);
        }

    }
}

function CheckGuess(guess) {
    if (guess === randomNumber) {
        lowOrHi.style.color="#01ff01";
        displayMessage(`Congratulation You Guess Correctly`)
        endGame()
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is Tooo high`)
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is Tooo Low`)
    }
}

function displayMessage(message) {
    console.log(`guess Remaining is ${guessRemaining}`)
    lowOrHi.innerHTML=message;

}
function endGame() {
    submit.setAttribute('disabled', true);
    guessField.setAttribute('disabled', true);
    console.log(`Game End`);
    button.innerText = 'Play Again';
    wrapper.appendChild(button);

}
button.addEventListener('click',()=>{
    startGame();
})
function startGame() {
    randomNumber = Math.floor((Math.random() * 100) + 1);
    console.log(randomNumber);
    nGuess = [];
    console.log(nGuess);
    guesses.innerHTML='';
    lowOrHi.innerHTML='';
    lowOrHi.style.color="red";
    guessRemaining = 10;
    GuessR.innerHTML=guessRemaining;
    guessField.value=null;
    submit.removeAttribute('disabled')
    guessField.removeAttribute('disabled')
   
}