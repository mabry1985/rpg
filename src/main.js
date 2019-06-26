import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { calculate } from './daycalculator.js';
import { userInput } from './frontend.js';






$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();

    day = ('#day').val()
    
    console.log(userInput(month, day, year))
    console.log(calculate(userInput));
  });


});
