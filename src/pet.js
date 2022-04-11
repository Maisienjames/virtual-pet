const MAXIMUM_FITNESS = 10;
const HUNGER_INCREMENT = 5;
const HUNGER_DETRIMENT = 3;
const FITNESS_INCREMENT = 4;
const FITNESS_DETRIMENT = 3;
const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0;
const SATIETY_THRESHOLD = 5;
const HUNGER_THRESHOLD = 4;
const UNFIT_THRESHOLD = 3;
const FITNESS_THRESHOLD = 4;
const DEATH_THRESHOLD = 30;

function Pet(name){
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = INITIAL_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    };

    Pet.prototype = {
        get isAlive() {
        return this.age < DEATH_THRESHOLD && this.hunger < 10 && this.fitness > 0;
        }
      };

    Pet.prototype.growUp = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          } else {
        this.age += 1;
        this.hunger += HUNGER_INCREMENT;
        this.fitness -= FITNESS_DETRIMENT;
        }
    };
    Pet.prototype.walk = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        if ((this.fitness + FITNESS_INCREMENT) <= MAXIMUM_FITNESS ) {
            this.fitness += FITNESS_INCREMENT;
          } else {
            this.fitness = MAXIMUM_FITNESS;
        }
    };
    Pet.prototype.feed = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        if ((this.hunger - HUNGER_DETRIMENT) >= INITIAL_HUNGER ) {
            this.hunger -= HUNGER_DETRIMENT;
          } else {
            this.hunger = INITIAL_HUNGER;
        }
    };
    Pet.prototype.checkUp = function() {
        if (this.hunger > HUNGER_THRESHOLD && this.fitness > UNFIT_THRESHOLD) {
        return 'I am hungry'
        } else if (this.hunger > HUNGER_THRESHOLD && this.fitness < FITNESS_THRESHOLD) {
        return 'I am hungry AND I need a walk'
        } else if (this.hunger < SATIETY_THRESHOLD && this.fitness < FITNESS_THRESHOLD) {
        return 'I need a walk'
        } else if (this.hunger < SATIETY_THRESHOLD && this.fitness > UNFIT_THRESHOLD) {
        return 'I feel great!'
        } else if (!this.isAlive) {
        return 'Your pet is no longer alive :('
        }
    };

module.exports = Pet;