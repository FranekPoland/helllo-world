import { storage } from "./storage.js";

var clear = document.querySelector('.clear');
var clear1 = document.querySelector('.clear1');
var clear2 = document.querySelector('.clear2');
var radios = document.querySelectorAll('input[type="radio"]');
var log = document.querySelector('#girl-answer');
var isChosenCar = false;


var getName = function () {
    var nameInput = document.querySelector('.name');
    var name = nameInput.value;
    storage.user = name;
    nameInput.value = '';
}

var getHolidays = function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    storage.holidays = [];

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkbox.checked = false;
            storage.holidays.push(checkbox.value);
        }
    });
}

var clearHolidays = function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

var getGirl = function () {
    var answer = 'You chose: ';

    radios.forEach(function (radio) {
        if (radio.checked) {
            answer = answer + radio.value + '. Please take your medicine.';
            radio.checked = false;
            storage.woman = radio.value;
        }
    });
    log.innerText = answer;
}

var clearRadio = function () {

    radios.forEach(function (radio) {
        if (radio.checked) {
            radio.checked = false;
        }
    });
}



var toggleCar = function () {

    var allCars = document.querySelectorAll('.car');

    allCars.forEach(function (car) {

        car.addEventListener("mouseleave", function (event) {
            event.currentTarget.classList.remove('highlitedcar');
        }, false);

        car.addEventListener("mouseover", function (event) {
            event.currentTarget.classList.add('highlitedcar');
        }, false);

        car.addEventListener('click', function (event) {
            if (!isChosenCar) {
                event.currentTarget.classList.add('chosencar');
            }
            isChosenCar = true;
            storage.car = event.currentTarget.name;
        }, false);

    });

}

toggleCar();

clear.addEventListener('click', clearRadio, false);
clear1.addEventListener('click', clearHolidays, false);
clear2.addEventListener('click', function () {
    var car = document.querySelector('.chosencar');
    car.classList.remove('chosencar');
    isChosenCar = false;
}, false);

export {getName, getHolidays, clearHolidays, getGirl, clearRadio}

