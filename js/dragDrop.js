var elmnt = document.getElementById("ballone");
var allBalls = document.querySelectorAll('.ball');


var dragElement = function(ball) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var elmnt = ball;
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  console.log('start');

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    console.log('dragmouse');
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    console.log('elementdrag');
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

allBalls.forEach(function(ball){
  dragElement(ball);


})




// var allBalls = document.querySelectorAll('.ball');

// allBalls.forEach(function (ball) {
//     ball.addEventListener("mousedown", dragStart, false);
//     ball.addEventListener("dragend", dragEnd, false);
//     ball.addEventListener("mousemove", drag, false);
// });



// var currentX;
// var currentY;
// var initialX;
// var initialY;


// function dragStart(e) {
//     initialX = e.clientX
//     initialY =e.clientY
//     var ball = e.target;
//    console.log('dragstart',ball.offsetWidth , e.clientY, e.clientX);
// }

// function dragEnd(event) {
    
//     let shiftX = event.clientX - ball.getBoundingClientRect().left;
//     let shiftY = event.clientY - ball.getBoundingClientRect().top;

//     ball.style.position = 'absolute';
//     ball.style.zIndex = 1000;
//     document.body.append(ball);

//     moveAt(event.pageX, event.pageY);

//     function moveAt(pageX, pageY) {
//       ball.style.left = pageX - shiftX + 'px';
//       ball.style.top = pageY - shiftY + 'px';
//     }
//     console.log(left, top, ball);    
//     // setTranslate(ball,e.clientX, e.clientY);
// }

// function drag(e) {
//     // var ball = e.target;
//     //     setTranslate(ball,e.clientX, e.clientY);
//     //console.log('drag', e.pageX,e.clientY, e.clientX);
    
// }

// function setTranslate(ball, xPos, yPos) {

//     console.log('ball, xPos, yPos',ball, xPos, yPos );
//     ball.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
// }










// function dragStart(e) {
//     var idName = e.target.id;
//     console.log(idName)
//     e.dataTransfer.setData('text/plain', idName);
// };

// var goal = document.querySelector('.goal');

// goal.addEventListener('dragenter', dragEnter);
// goal.addEventListener('dragover', dragOver);
// goal.addEventListener('dragleave', dragLeave);
// goal.addEventListener('drop', drop);

// function dragEnd(e) {
//     console.log('rect', e.clientX, e.pageX,e.clientY);
//     e.clientX, e.clientY
//     e.target.posx.value = e.pageY+'px';
//     e.target.style.marginLeft = e.pageX+'px';
// }





// function dragEnter(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }

// function dragOver(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }





// function dragLeave(e) {}

// function drop(e) {
//     var idName = e.dataTransfer.getData('text/plain');
//     var draggable = document.getElementById(idName);
//     console.log('transe\freed idName', idName, 'realId', '#' + idName);
//     e.target.appendChild(draggable);
//     draggable.classList.remove('hidden');
// };
























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
// }, false)