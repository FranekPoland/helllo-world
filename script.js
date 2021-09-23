function getName() {
    var name = document.querySelector('.name');
    console.log('name', document);
    return name;
}

function send() {
    test();
}

function display() {
    var button = document.querySelector('.button');
    button.innerHTML = 'lulu';
    
    if (button.style.background == 'red none repeat scroll 0% 0%') { 
        button.style.background = 'yellow'
    }
    else {
        button.style.background = 'red'

    }
}

function test() {
    var button = document.getElementsByClassName('.button');
    console.log('tester', button.style)
    if (button.style.background == 'red none repeat scroll 0% 0%') { 
        return console.log('test passed')
    }
    console.log('test failed')
}
