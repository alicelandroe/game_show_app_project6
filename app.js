const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

// click start button to get to game
const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', (e) => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
})

let phrases = ['Apples are red', 'Bananas are yellow', 'Oranges are orange', 'Grapes are green or purple', 'Strawberries are red'];

function getRandomPhraseAsArray(arr){
    const randomArrayItem = arr[Math.floor(Math.random() * arr.length)];
    const characters = randomArrayItem.split('');
    return characters;
}

const hej = getRandomPhraseAsArray(phrases);

// Create an addPhraseToDisplay function that loops through an array of characters.

function addPhraseToDisplay(arr){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const createLi = document.createElement("li");
        createLi.textContent = element; 
        const ul = phrase.querySelector('ul');
        ul.appendChild(createLi);
    }
}

addPhraseToDisplay(hej);