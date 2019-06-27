export class Character{
  constructor(name) {
    this.name = name;
    this.attack = 5;
    this.health = 50;
    this.turn = true;
  };
}

export const player1 = new Character('Bob');

// function attack() {
//
// }

export function randomMonster() {
  const troll = {
    name: 'Troll',
    attack: 8,
    health: 60,
    turn: false,
  };

  const witch = {
    name: 'Witch',
    attack: 6,
    health: 45,
    turn: false,
  };

  const goblin = {
    name: 'Goblin',
    attack: 3,
    vitality: 25,
    turn: false,
  };

  const monsterArr = [troll, witch, goblin];
  const monster =  monsterArr[Math.floor(Math.random() * monsterArr.length)];
  return monster;
};

const newMonster = randomMonster();

export function pushFightArr(monster, character) {
  const fightArray = [];
  fightArray.push(monster, character);
  return fightArray;
};

export const newArr = pushFightArr(newMonster, player1);

export function turnFinder(newArr) {
  for (let i = 0; i < newArr.length; ++i) {
    if (newArr[i].turn === true) {
      console.log(newArr[i].name);
      return newArr[i].name;

    }
  }

};
