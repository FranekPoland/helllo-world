//Globals
var clear = document.querySelector('.clear');
var clear1 = document.querySelector('.clear1');
var clear2 = document.querySelector('.clear2');
var radios = document.querySelectorAll('input[type="radio"]');
var log = document.querySelector('#girl-answer');
var result = document.querySelector('.result');
var car1 = document.getElementById('car1');
var car2 = document.getElementById('car2');
var car3 = document.getElementById('car3');

var storage = {
    user: '',
    woman: '',
    holidays: [],
    car: ''
};

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


// Holidays
clear1.addEventListener('click', clearHolidays, false);

// Girl
clear.addEventListener('click', clearRadio, false);

// Cars

var isChosenCar = false;

// car1.addEventListener('mouseover', function (event) {
//     event.currentTarget.classList.add('highlitedcar');
// }, false);

// car2.addEventListener('mouseover', function (event) {
//     event.currentTarget.classList.add('highlitedcar');
// }, false);

// car3.addEventListener('mouseover', function (event) {
//     event.currentTarget.classList.add('highlitedcar');
// }, false);

// car1.addEventListener("mouseleave", function (event) {
//     event.currentTarget.classList.remove('highlitedcar');
// }, false);

// car2.addEventListener("mouseleave", function (event) {
//     event.currentTarget.classList.remove('highlitedcar');
// }, false);

// car3.addEventListener("mouseleave", function (event) {
//     event.currentTarget.classList.remove('highlitedcar');
// }, false);


var toggleCar = function( arrayOfCars) {

    var allCars = document.querySelectorAll('.car');

    allCars.forEach(function(car) { 
        
        car.addEventListener("mouseleave", function (event) {
            event.currentTarget.classList.remove('highlitedcar');
        }, false);

        car.addEventListener("mouseover", function (event) {
            event.currentTarget.classList.add('highlitedcar');
        }, false);
    });
    
}

toggleCar();



// TODO See example above and use this idea to shorten the code below

car1.addEventListener('click', function (event) {
    if (!isChosenCar) {
        event.currentTarget.classList.add('chosencar');
    }
    isChosenCar = true;
    storage.car = event.currentTarget.name;
}, false);

car2.addEventListener('click', function (event) {
    if (!isChosenCar) {
        event.currentTarget.classList.add('chosencar');
    }
    isChosenCar = true;
    storage.car = event.currentTarget.name;
}, false);

car3.addEventListener('click', function (event) {
    if (!isChosenCar) {
        event.currentTarget.classList.add('chosencar');
    }
    isChosenCar = true;
    storage.car = event.currentTarget.name;
}, false);

// ------------up to here ------------






clear2.addEventListener('click', function () {
    var car = document.querySelector('.chosencar');
    car.classList.remove('chosencar');
    isChosenCar = false;
}, false);



// Storage
var show = function () {
    var table = document.querySelector('.hidden');
    table.classList.remove('hidden');
    var i = 1;
    for (var key in storage) {
        var tableName = 'row';
        tableName = tableName + i;
        var row = document.getElementById(tableName);
        var children = row.children;
        children[0].innerHTML = i;
        children[1].innerHTML = key;
        children[2].innerHTML = storage[key];
        i++;
    }
}

var handleResult = function() {
    getHolidays();
    getGirl();
    getName();

    show();
}

result.addEventListener('click', handleResult, false);

