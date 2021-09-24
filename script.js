// function getName() {
//     var name = document.querySelector('.name');
//     console.log('name', document);
//     return name;
// }

// function send() {
//     test();
// }

// function display() {
//     var button = document.querySelector('.button');
//     button.innerHTML = 'lulu';

//     if (button.style.background == 'red none repeat scroll 0% 0%') {
//         button.style.background = 'yellow'
//     }
//     else {
//         button.style.background = 'red'

//     }
// }

// function test() {
//     var button = document.getElementsByClassName('.button');
//     console.log('tester', button.style)
//     if (button.style.background == 'red none repeat scroll 0% 0%') {
//         return console.log('test passed')
//     }
//     console.log('test failed')
// }

//---------------------------RADIO----------------------------------

var submit = document.querySelector('.submit');
// TODO add btn Clear

var log = document.querySelector("#girl-answer");

submit.addEventListener("click", function () {

    var radios = document.querySelectorAll("input[type='radio']");
    var answer = 'You chose: ';

    radios.forEach(function (radio) {
        if (radio.checked) {
            answer = answer + radio.value + '. Please take your medicine.';
        }
    });

    log.innerText = answer;

}, false);
