import { Character } from './character.js';
import { randomMonster } from './monster.js';

describe('Classes', function () {
  it('should return an object with inputted name', function () {
    expect((new Character('Thaddeus')).name).toBe('Thaddeus');
  });
});

describe('Monsters', function () {
  it('should return one of the monsters from array', function () {
    expect(randomMonster()).toEqual(jasmine.any(Object));
  });
});
