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

// var gamebox = document.querySelector('.gamebox');
// gamebox.addEventListener("dragover", function (event) {
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
