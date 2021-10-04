import { storage } from "./storage.js";
import { getName, getHolidays, getGirl } from "./survey.js";
import { isValid, showModal } from "./validation.js";

var result = document.querySelector('.result');




var showResult = function () {
    var table = document.querySelector('table');
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

var getResult = function() {
    getHolidays();
    getGirl();
    getName();
}


var handleResult = function () {
    getResult();
    if (isValid()) {
        showResult();
    } else {
        showModal();
    }

}

result.addEventListener('click', handleResult, false);