const MAXIMUM_FITNESS = 10;
const HUNGER_INCREMENT = 5;
const FITNESS_INCREMENT = 4;
const FITNESS_DETRIMENT = 3;

function Pet(name){
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
    };

    Pet.prototype.growUp = function() {
        this.age += 1;
        this.hunger += HUNGER_INCREMENT;
        this.fitness -= FITNESS_DETRIMENT;
    };
    Pet.prototype.walk = function() {
        if ((this.fitness + FITNESS_INCREMENT) <= MAXIMUM_FITNESS ) {
            this.fitness += FITNESS_INCREMENT;
          } else {
            this.fitness = MAXIMUM_FITNESS;
        }
    };

module.exports = Pet;