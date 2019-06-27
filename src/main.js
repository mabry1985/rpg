import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Character, randomMonster, pushFightArr, newArr, turnFinder, player1 } from './game.js';

//import { Warrior, Mage, Rogue } from './character.js';

$(document).ready(function () {

  $('#formOne').submit(function (event) {
    event.preventDefault();
    const playerCharacter = new Character(inputName);

  });

});
