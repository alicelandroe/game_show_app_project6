// STEP 1: Get the elements you’ll need from your HTML
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

// STEP 2: Attach a event listener to the “Start Game” button to hide the start screen overlay.
const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', (e) => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
})

// STEP 3: Create a phrases array that contains at least 5 different phrases as strings.
let phrases = ['Apples are red', 'Bananas are yellow', 'Oranges are orange', 'Grapes are green or purple', 'Strawberries are red'];

// STEP 4: Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr){
    const randomArrayItem = arr[Math.floor(Math.random() * arr.length)];
    const characters = randomArrayItem.split('');
    return characters;
}

const phraseArray = getRandomPhraseAsArray(phrases);


// STEP 5: Create an addPhraseToDisplay function that loops through an array of characters.

function addPhraseToDisplay(arr){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const createLi = document.createElement("li");
        createLi.textContent = element; 
        if (element !== ' ') {
            createLi.className = 'letter';
        }
        const ul = phrase.querySelector('ul');
        ul.appendChild(createLi);
    }
}

addPhraseToDisplay(phraseArray);

// STEP 6: Create a checkLetter function.

function checkLetter(button){
    const letterElements = phrase.querySelectorAll('.letter');
    let correctLetter = null; // if the letter guessed isn't in the phrase, the variable is null. If the letter IS included in the phrase, the variable consists of that letter
    for (let i = 0; i < letterElements.length; i++) {
        const letter = letterElements[i].textContent;
        if (letter.toLowerCase() === button.toLowerCase()) {
            letterElements[i].className = 'letter show'; 
            correctLetter = letter;
        }
    }
    return correctLetter;
}

// STEP 7: Add an event listener to the keyboard.
// STEP 8: Count the missed guesses in the game.

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
        return;
    }
    e.target.className = 'chosen';
    e.target.disabled = true;
    let buttonLetter = e.target.textContent;
    let letterFound = checkLetter(buttonLetter);
    if (letterFound === null) {
        missed += 1;
        const ol = document.querySelector('#scoreboard').firstElementChild;
        const tries = ol.querySelector('.tries');
        ol.removeChild(tries);
    }
    checkWin();
});

// STEP 9: Create a checkWin function.

function checkWin() {
    const lettersWithClassShow = document.querySelectorAll('.show');
    const lettersWithClassLetters = document.querySelectorAll('.letter');
    const overlay = document.querySelector('#overlay');
    const endTitle = document.querySelector('.title');
    if (lettersWithClassShow.length === lettersWithClassLetters.length) {
        overlay.style.display = '';
        overlay.className = 'win';
        endTitle.textContent = 'You won! Yay!';
    } else if (missed >= 5) {
        overlay.style.display = '';
        overlay.className = 'lose';
        endTitle.textContent = "you lost :( Wanna try again? ";
    }
}
