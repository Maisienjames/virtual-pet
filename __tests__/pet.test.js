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
  });

  