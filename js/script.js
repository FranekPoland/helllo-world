//Globals
var clear = document.querySelector('.clear');
var clear1 = document.querySelector('.clear1');
var clear2 = document.querySelector('.clear2');
var radios = document.querySelectorAll('input[type="radio"]');
var log = document.querySelector('#girl-answer');
var result = document.querySelector('.result');
var buttonerror = document.querySelector('.buttonerror');
var errors = [];
var allBalls = document.querySelectorAll('.ball');

var img = document.createElement('img');
img.src = 'assets/goal.png';
img.classList.add('goal'); 
document.getElementById('goal').appendChild(img);
// down.innerHTML = "Image Element Added."; 


allBalls.forEach(function (ball) {


    ball.addEventListener("dragstart", function (event) {
        event.preventDefault();
        var dragged = event.target.id;
        event.dataTransfer.setData('text', dragged);
        console.log('dragged id', dragged);
    }, false);

    // ball.addEventListener("dragend", function (event) {
    //     dragged = event.target;
    //     //event.target.classList.add('hidden');
    // }, false);



});

// var gamebox = document.querySelector('.gamebox');
// gamebox.addEventListener("dragover", function (event) {
//     event.preventDefault();
//     var element = event.dataTransfer.getData('id');
//     console.log('idElement', element);
//     event.target.appendChild(document.getElementById(''));
// }, false);

var goal = document.querySelector('#goal');
goal.addEventListener("dragover", function (event) {
    event.dataTransfer.setData("text", event.target.id);
}, false);

goal.addEventListener("drop", function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    console.log('2 id', data);
    event.target.appendChild(document.getElementById(data));
}, false);




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


clear2.addEventListener('click', function () {
    var car = document.querySelector('.chosencar');
    car.classList.remove('chosencar');
    isChosenCar = false;
}, false);


var storage = {
    user: '',
    woman: '',
    holidays: [],
    car: '',

};
var isValid = function () {
    errors = [];
    for (var key in storage) {
        if (storage[key] === '') {
            var msg = key;
            errors.push(msg);

        }
        var isEmpty = storage.holidays.length === 0;
        if (key === 'holidays' && isEmpty) {
            var msg = 'holidays';
            errors.push(msg);

        }
    }
    if (errors.length) {
        return false;
    } else {
        return true;
    }
}



// Storage
var showResult = function () {
    var table = document.querySelector('table');
    //if (table.classList.contains('hidden'))
    table.classList.remove('hidden');
    var i = 1;
    for (var key in storage) {
        var rowName = 'row';
        rowName = rowName + i;
        var row = document.getElementById(rowName);
        var children = row.children;
        children[0].innerHTML = i;
        children[1].innerHTML = key;
        children[2].innerHTML = storage[key];
        i++;
    }
}

var showModal = function () {
    var errorMessage = document.querySelector('#error-message');
    var errormodal = document.querySelector('.errormodal');
    errormodal.classList.remove('hidden');
    window.scrollTo(0, 0);
    var longError = 'Missing data for ';
    errors.forEach(function (msg) {
        longError = longError + msg + ', ';
    });
    longError = longError.slice(0, -2);
    errorMessage.innerHTML = longError;
}


var hideModal = function () {
    var errormodal = document.querySelector('.errormodal');
    errormodal.classList.add('hidden');
}

buttonerror.addEventListener('click', hideModal, false);

var handleResult = function () {
    getHolidays();
    getGirl();
    getName();
    if (isValid()) {
        showResult();
    } else {
        showModal();
    }

}

result.addEventListener('click', handleResult, false);