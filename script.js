//Globals
var submit = document.querySelector('.submit');
var submit1 = document.querySelector('.submit1');
var clear1 = document.querySelector('.clear1');
var clear = document.querySelector('.clear');
var save = document.querySelector('.savename');

var radios = document.querySelectorAll("input[type='radio']");
var log = document.querySelector("#girl-answer");
var result = document.querySelector('.result');
var storage = {
    user: '',
    woman: '',
    holidays: []
};

var getName = function () {
    var nameInput = document.querySelector('.name');
    var name = nameInput.value;
    storage.user = name;
    nameInput.value = '';
    console.log('test')
}

var getHolidays = function () {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    storage.holidays = [];

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkbox.checked = false;
            storage.holidays.push(checkbox.value);
        }
    });

}

var clearHolidays = function () {

    var checkboxes = document.querySelectorAll("input[type='checkbox']");

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

// User

save.addEventListener("click", getName, false);

// Holidays

submit1.addEventListener("click", getHolidays, false);

clear1.addEventListener("click", clearHolidays , false);

// Girl

submit.addEventListener("click",getGirl, false);

clear.addEventListener("click", clearRadio, false);

// Storage
result.addEventListener('click', function () {
    console.log(storage);

}, false);