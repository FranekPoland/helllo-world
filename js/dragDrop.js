var allBalls = document.querySelectorAll('.ball');

allBalls.forEach(function (ball) {
    ball.addEventListener('dragstart', dragStart, false);
    //ball.addEventListener('dragend', dragEnd, false);
});


function dragStart(e) {
    var idName = e.target.id;
    console.log(idName)
    e.dataTransfer.setData('text/plain', idName);
};

var goal = document.querySelector('.goal');

goal.addEventListener('dragenter', dragEnter);
goal.addEventListener('dragover', dragOver);
goal.addEventListener('dragleave', dragLeave);
goal.addEventListener('drop', drop);

// function dragEnd(e) {
//     console.log('rect', e.clientX, e.pageX,e.clientY);
//     e.clientX, e.clientY
//     e.target.posx.value = e.pageY+'px';
//     e.target.style.marginLeft = e.pageX+'px';
// }



function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {}

function drop(e) {
    var idName = e.dataTransfer.getData('text/plain');
    var draggable = document.getElementById(idName);
    console.log('transe\freed idName', idName, 'realId', '#' + idName);
    e.target.appendChild(draggable);
    draggable.classList.remove('hidden');
};
























// var allBalls = document.querySelectorAll('.ball');

// var img = document.createElement('img');
// img.src = 'assets/goal.png';
// img.classList.add('goal'); 
// document.getElementById('goal').appendChild(img);


// down.innerHTML = "Image Element Added."; 


// allBalls.forEach(function (ball) {


//     ball.addEventListener("dragstart", function (event) {
//         event.preventDefault();
//         var dragged = event.target.id;
//         event.dataTransfer.setData('text', dragged);
//         console.log('dragged id', dragged);
//     }, false);

// ball.addEventListener("dragend", function (event) {
//     dragged = event.target;
//     //event.target.classList.add('hidden');
// }, false);



// });

// var gamegoal = document.querySelector('.gamegoal');
// gamegoal.addEventListener("dragover", function (event) {
//     event.preventDefault();
//     var element = event.dataTransfer.getData('id');
//     console.log('idElement', element);
//     event.target.appendChild(document.getElementById(''));
// }, false);

// var goal = document.querySelector('#goal');
// goal.addEventListener("dragover", function (event) {
//     event.dataTransfer.setData("text", event.target.id);
// }, false);

// goal.addEventListener("drop", function (event) {
//     event.preventDefault();
//     var data = event.dataTransfer.getData("text");
//     console.log('2 id', data);
//     event.target.appendChild(document.getElementById(data));
// }, false);