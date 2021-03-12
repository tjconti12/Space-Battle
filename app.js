// Make object for USS Erica
const heroShip = {
    name: 'Erica',
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    fight(enemy) {
        alert(`Attacking ${enemy.name}!`);
        enemy.hull -= this.firepower 
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
}

// Create 6 instances of Alien ship
    // Made only one for now
const alienShip1 = new Alien ('ship1');

// Game logic for only one enemy ship
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