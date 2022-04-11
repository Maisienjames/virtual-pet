const { it, expect } = require('@jest/globals');
const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
    it('has initial age of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });
    it('has initial hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
    it('has initial fitness of 10', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1, increments hunger by 5, decreases fitness by 3', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.fitness).toEqual(7);
      expect(pet.hunger).toEqual(5);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
  
      pet.age = 30;
  
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');

      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
  });
  it('increases fitness to a maximum of 10', () => {
      const pet = new Pet('fido');

      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 4;
      pet.feed();
      expect(pet.hunger).toEqual(1);
    });
    it('decreases hunger to a minimum of 0', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.age = 30;

      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
    });

    describe('checkUp', () => {
      it('tells you if the pet is unfit', () => {
        const pet = new Pet('Fido');

        pet.fitness = 2;
        pet.hunger = 2;
        pet.checkUp();
        expect(pet.checkUp).toBe["I need a walk"];
      });
      it('tells you if the pet is hungry', () => {
        const pet = new Pet('fido');
    
        pet.hunger = 5;
        pet.fitness = 10;
        pet.checkUp();
        expect(pet.checkUp).toBe["I am hungry"];
      });
      it('tells you if the pet is well', () => {
        const pet = new Pet('fido');

        pet.hunger = 4;
        pet.fitness = 10;
        pet.checkUp();
        expect(pet.checkUp).toBe["I feel great!"];
      });
      it('tells you if the pet is unfit and hungry', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 2;
        pet.hunger = 10;
        pet.checkUp();
        expect(pet.checkUp).toBe["I am hungry AND I need a walk"];
      });
      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });
      });
});