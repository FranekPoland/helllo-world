var submit = document.querySelector('.submit');
var submit1 = document.querySelector('.submit1');
var clear1 = document.querySelector('.clear1');
var clear = document.querySelector('.clear');
var save = document.querySelector('.savename');
var log = document.querySelector("#girl-answer");
var result = document.querySelector('.result');
var storage = {
    user: '',
    woman: '',
    holidays: []
};


// User

save.addEventListener("click", function () {
    var nameInput = document.querySelector('.name');
    var name = nameInput.value;
    nameInput.value = '';
    storage.user = name;
}, false)


// Holidays

submit1.addEventListener("click", function () {
    storage.holidays = [];

    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkbox.checked = false;
            storage.holidays.push(checkbox.value);
        }
    });
}, false);

clear1.addEventListener("click", function () {

    var checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkbox.checked = false
        }
    });


}, false);

//---------------------------RADIO----------------------------------
// Girl

submit.addEventListener("click", function () {

    var radios = document.querySelectorAll("input[type='radio']");
    var answer = 'You chose: ';

    radios.forEach(function (radio) {
        if (radio.checked) {
            answer = answer + radio.value + '. Please take your medicine.';
            radio.checked = false
            storage.woman = radio.value;
            console.log(radio.checked, storage, radio.value);
        }
    });

    log.innerText = answer;

}, false);

clear.addEventListener("click", function () {

    var radios = document.querySelectorAll("input[type='radio']");


    radios.forEach(function (radio) {
        if (radio.checked) {
            radio.checked = false
        }
    });


}, false);

// Storage
result.addEventListener('click', function () {
    console.log(storage);

}, false);