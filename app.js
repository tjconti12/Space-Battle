// DOM Elements
const startButton = document.querySelector('#start-game-button');
const resetButton = document.querySelector('#reset-game-button');
const modal = document.querySelector('.pop-up-modal');
const fightButton = document.querySelector('#fight-button');
const closeModalButton = document.querySelector('#close-modal-button');
const runButton = document.querySelector('#run-button');
const modalH2 = document.querySelector('#modal-h2');
const modalP = document.querySelector('#modal-p');
const defaultModalTextH2 = modalH2.innerText;
const defaultModalTextP = modalP.innerText;
const heroImg = document.querySelector('#hero-ship-img');
const gameText = document.querySelector('.game-text');
const nextButton = document.querySelector('#next-button');
const alien1Img = document.querySelector('#alien-ship1-img');
const alien2Img = document.querySelector('#alien-ship2-img');
const alien3Img = document.querySelector('#alien-ship3-img');
const alien4Img = document.querySelector('#alien-ship4-img');
const alien5Img = document.querySelector('#alien-ship5-img');
const alien6Img = document.querySelector('#alien-ship6-img');
const startingGif = document.querySelector('.starting-gif');
const attackButton = document.querySelector('#attack-button');
const redXOne = document.querySelector('.red-X-one');
const redXTwo = document.querySelector('.red-X-two');
const redXThree = document.querySelector('.red-X-three');
const redXFour = document.querySelector('.red-X-four');
const redXFive = document.querySelector('.red-X-five');
const redXSix = document.querySelector('.red-X-six');

let gameString = '';

// battleIndex for current Alien Object
let battleIndex = 0;
// alienImgIndex to keep track of the corresponding image for that object
let alienImgIndex = 0;
const alienImgArr = [alien1Img, alien2Img, alien3Img, alien4Img, alien5Img, alien6Img];
let redXIndex = 0;
const redXArr = [redXOne, redXTwo, redXThree, redXFour, redXFive, redXSix];

// Make object for USS Erica
const heroShip = {
    name: 'Erica',
    hull: 20,
    firepower: 5,
    accuracy: 1, // CHANGE BACK!!!!!
    attack(enemy) {
        if(Math.random() < this.accuracy) {
            enemy.hull -= this.firepower;
            if (enemy.hull < 0) {
                enemy.hull = 0;
            } 
            gameString = `${this.name} is attacking ${enemy.name}! ${enemy.name}'s hull is now: ${enemy.hull}!`;
            gameText.innerText = gameString;
        } else {
            gameString = `${this.name} is attacking ${enemy.name}! ${this.name}'s attack missed! ${enemy.name}'s hull is still: ${enemy.hull}!`;
            gameText.innerText = gameString;
        }
    }
}
// Make Alien ship class
// randomize hull between 3 & 6
    // randomize firepower between 2 & 4
    // randomize accuracy between 0.6 & 0.8
class Alien {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4);   // DONT FORGET TO ADDDD!!!!!!!! + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = 1    // DONT FORGET TO FIXXXXX!!!!(Math.floor((Math.random () * 3) + 6) * 0.1).toFixed(1);
        // Used toFixed method because it was returning a long decimal. Found documentation at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    }
    attack() {
        if(Math.random() < this.accuracy) {
            heroShip.hull -= this.firepower 
            if (heroShip.hull < 0) {
                heroShip.hull = 0;
            }
            alert(`${this.name} is attacking ${heroShip.name}! ${heroShip.name}'s hull is now: ${heroShip.hull}!`);
        } else {
            alert(`${this.name} is attacking ${heroShip.name}! ${this.name}'s attack missed! ${heroShip.name}'s hull is still: ${heroShip.hull}!`);
        }
    }
}

// Create 6 instances of Alien ship
    // Made only one for now
let alienShip1 = new Alien ('ship1');
let alienShip2 = new Alien ('ship2');
let alienShip3 = new Alien ('ship3');
let alienShip4 = new Alien ('ship4');
let alienShip5 = new Alien ('ship5');
let alienShip6 = new Alien ('ship6');


const resetAliens = () => {
    alienShip1 = new Alien ('ship1');
    alienShip2 = new Alien ('ship2');
    alienShip3 = new Alien ('ship3');
    alienShip4 = new Alien ('ship4');
    alienShip5 = new Alien ('ship5');
    alienShip6 = new Alien ('ship6');
};

const alienShip = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6];

// DOM related functions
// Add open class to modal

const closeModal = () => {
   
    modalH2.innerText = defaultModalTextH2;
    modalP.innerText = defaultModalTextP;
    fightButton.style.display = 'inline';
    runButton.style.display = 'inline';
}

const hideElement = (element) => {
    element.classList.add('hidden');
}

const showElement = (element) => {
    element.classList.remove('hidden');
}

const modalRunAway = () => {
    modalH2.innerText = 'You lose!';
    modalP.innerText = 'The aliens have invaded Earth, good job you coward!';
    fightButton.style.display = 'none';
    runButton.style.display = 'none';
    modal.classList.add('run');
}

const startFightText = () => {
    let currentText = `${alienShip.length} Alien Ships Have Approached!`;
    gameText.innerText = currentText;
}

// I kept a separate function for showing and hiding aliens so I didnt have to pass so many parameters into the show and hide functions
const showAliens = () => {
    alien1Img.classList.remove('hidden');
    alien2Img.classList.remove('hidden');
    alien3Img.classList.remove('hidden');
    alien4Img.classList.remove('hidden');
    alien5Img.classList.remove('hidden');
    alien6Img.classList.remove('hidden');
}

const hideAliens = () => {
    alien1Img.classList.add('hidden');
    alien2Img.classList.add('hidden');
    alien3Img.classList.add('hidden');
    alien4Img.classList.add('hidden');
    alien5Img.classList.add('hidden');
    alien6Img.classList.add('hidden');
}




// Game logic for only one enemy ship

// Did not need anymore for current edition of game
// const startGame = () => {
//     if (battleIndex === alienShip.length) {
//         let winningText = 'Game over! You win!';
//         gameText.innerText = winningText;
//     } else {
//          heroShip.attack(alienShip[battleIndex]);
//     }
//     // alienShipIndex++;
// }

const heroWins = () => {
    gameString = 'Game over! You win!';
    gameText.innerText = gameString;
}


const checkForEnemyAlive = () => {
    if (alienShip[battleIndex].hull > 0) {
        gameString = `${alienShip[battleIndex].name} is still alive!`
        gameText.innerText = gameString;
        // enemy.attack(heroShip);
        // if (heroShip.hull > 0) {
        //     // battleNow(enemy);
        // } else {
        //     alert('Enemy Wins');
        // }
    } else {
        gameString = 'Hero Wins!';
        gameText.innerText = gameString;
        alienImgArr[alienImgIndex].classList.remove('battle-position');
        showElement(redXArr[redXIndex]);
        battleIndex += 1;
        alienImgIndex += 1;
        redXIndex += 1;
    }
}
// Make Battle Function
    // HeroShip.attack(enemy)
        // IF enemy.hull is greater than 0
            // enemy.attack(hero)
            // IF hero.hull > 0
                // heroShip.attack(enemy)
            // ELSE 
                //enemy wins!
        // ELSE
            // Hero wins!



const startBattle = () => {
    let currentText = `${alienShip[battleIndex].name} has approached you for battle!`
    gameText.innerText = currentText;
}

const moveShipToBattle = () => {
    gameText.innerText = '';
    alienImgArr[alienImgIndex].classList.add('battle-position');
    console.log(alienImgArr[alienImgIndex]);
    heroImg.classList.add('battle-position');
    heroImg.classList.remove('left');
    showElement(attackButton);
    hideElement(nextButton);
}


// Starting the game via a button
// Put the while in a function called startGame
// Add event listener to start button
// Pass in startGame function on click
startButton.addEventListener('click', () => {
    showElement(modal);
    hideElement(startButton);
    hideElement(startingGif);
});

closeModalButton.addEventListener('click', () => {
    hideElement(modal);
    showElement(startingGif);
    showElement(startButton);
});

fightButton.addEventListener('click', () => {
    hideElement(modal);
    showElement(heroImg);
    startFightText();
    showElement(nextButton);
});

runButton.addEventListener('click', modalRunAway);

resetButton.addEventListener('click', () => {
    resetAliens();
    alienShipIndex = 0;
    heroShip.hull = 10;
    heroImg.classList.remove('left');
    heroImg.classList.add('center');
    gameText.innerText = '';
    showMainButtons();
    hideAliens();
    hideNextButton();
})

nextButton.addEventListener('click', () => {
    selectNextFunction();
})

attackButton.addEventListener('click', () => {
    startGame();
    hideElement(attackButton);
    showElement(nextButton);
})


// Next Button Game Logic

const nextFunctionArr = [showAliens, startBattle, moveShipToBattle, checkForEnemyAlive, startBattle, moveShipToBattle, checkForEnemyAlive, startBattle, moveShipToBattle, checkForEnemyAlive, startBattle, moveShipToBattle, checkForEnemyAlive, startBattle, moveShipToBattle, checkForEnemyAlive, startBattle, moveShipToBattle, checkForEnemyAlive, heroWins];

let functionIndex = 0;

const selectNextFunction = () => {
    nextFunctionArr[functionIndex]();
    functionIndex += 1;
}


