import { Character, randomMonster, pushFightArr, newArr, turnFinder } from '../src/game.js';

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

describe('Vs Array', function () {
  it('should show array of character and monster', function () {
    expect(pushFightArr('monster', 'character')).toEqual(jasmine.any(Object));
  });
});

describe('Active Turn', function () {
  it('should return the character with the turn property of true', function () {
    expect(turnFinder(newArr)).toEqual('Bob');
  });
});
