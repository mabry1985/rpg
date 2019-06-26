
export function randomMonster(array) {

  const troll = {
    name: 'Troll',
    attack: 8,
    health: 60,
  };

  const witch = {
    name: 'Witch',
    attack: 6,
    health: 45,
  };

  const goblin = {
    name: 'Goblin',
    attack: 3,
    vitality: 25,
  };

  const monsterArr = [troll, witch, goblin];
  const monster =  monsterArr[Math.floor(Math.random() * monsterArr.length)];
  return monster;
};

// export class Witch{
//   constructor(name) {
//     this.name = name;
//     this.strength = 4;
//     this.agility = 5;
//     this.intelligence = 8;
//     this.vitality = 4;
//   };
// }
//
// export class Goblin{
//   constructor(name) {
//     this.name = name;
//     this.strength = 5;
//     this.agility = 8;
//     this.intelligence = 4;
//     this.vitality = 4;
//   };
// }
