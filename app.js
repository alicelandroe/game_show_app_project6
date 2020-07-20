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