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
    const li = phrase.querySelectorAll('.letter');
    for (let i = 0; i < li.length; i++) {
        const letter = li[i].textContent;
        if (letter === button) {
            let letterShown = li[i].className = 'show';
            return letter;
        }
    }
    return null;
}

// STEP 7: Add an event listener to the keyboard.
// STEP 8: Count the missed guesses in the game.

qwerty.addEventListener('click', (e) => {
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
});

// // Create a checkWin function.

// Each time the player guesses a letter, this function will check whether the game has been won or lost. 

// At the very end of the keyboard event listener, you’ll run this function to check if the number of letters with class “show” is equal to the number of letters with class “letters”. 
// If they’re equal, show the overlay screen with the “win” class and appropriate text. 
// Otherwise, if the number of misses is equal to or greater than 5, show the overlay screen with the “lose” class and appropriate text.

function checkWin() {
    
}
