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

getRandomPhraseAsArray(phrases);