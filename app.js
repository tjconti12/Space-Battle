// Make object for USS Erica
const heroShip = {
    name: 'Erica',
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    attack(enemy) {
        enemy.hull -= this.firepower 
        alert(`${this.name} is attacking ${enemy.name}! ${enemy.name}'s hull is now: ${enemy.hull}!`);
    }
}
// Make Alien ship class
// randomize hull between 3 & 6
    // randomize firepower between 2 & 4
    // randomize accuracy between 0.6 & 0.8
class Alien {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor((Math.random () * 3) + 6) * 0.1).toFixed(1);
        // Used toFixed method because it was returning a long decimal. Found documentation at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    }
    attack() {
        heroShip.hull -= this.firepower;
        alert(`${this.name} is attacking ${heroShip.name}! ${heroShip.name}'s Hull is now: ${heroShip.hull}!`);
    }
}

// Create 6 instances of Alien ship
    // Made only one for now
const alienShip1 = new Alien ('ship1');
const alienShip2 = new Alien ('ship2');
const alienShip3 = new Alien ('ship3');
const alienShip4 = new Alien ('ship4');
const alienShip5 = new Alien ('ship5');
const alienShip6 = new Alien ('ship6');

const alienShip = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6];

// Game logic for only one enemy ship

const battleNow = (enemy) => {
    heroShip.attack(enemy);
    if (enemy.hull > 0) {
        enemy.attack(heroShip);
        if (heroShip.hull > 0) {
            battleNow(enemy);
        } else {
            alert('Enemy Wins');
        }
    } else {
        alert('Hero Wins');
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



// Declaring index for alienShips for the while loop. The loop will allow the heroShip to attack each enemy until the hero dies, or no enemys are left
let alienShipIndex = 0;

userChoice = undefined;

while (heroShip.hull > 0 && alienShipIndex < alienShip.length + 1) {
    if (alienShipIndex === alienShip.length) {
        alert('Game over! You win!');
    } else {
        let promptAnswer = prompt ('Do you want to continue?', 'yes');
        userChoice = promptAnswer;
        if (userChoice === 'yes') {
            battleNow(alienShip[alienShipIndex]);
        } else {
            alert('You lose then');
            heroShip.hull = 0;
        }
    }
    alienShipIndex++;
}






