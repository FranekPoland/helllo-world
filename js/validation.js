import { storage } from "./storage.js";


var buttonerror = document.querySelector('.buttonerror');
var errors = [];

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

export {isValid, showModal, hideModal}