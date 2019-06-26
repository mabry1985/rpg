import { Warrior, Mage, Rogue } from './character.js';
import { randomMonster } from './monster.js';

describe('Classes', function () {
  it('should return an object with inputted name', function () {
    expect((new Warrior('Thaddeus')).name).toBe('Thaddeus');
  });

  it('should return an object with inputted name', function () {
    expect((new Mage('Barnabus')).name).toBe('Barnabus');
  });

  it('should return an object with inputted name', function () {
    expect((new Rogue('Skip')).name).toBe('Skip');
  });
});

describe('Monsters', function () {
  it('should return one of the monsters from array', function () {
    expect(randomMonster()).toEqual(jasmine.any(Object));
  });
});
