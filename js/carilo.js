const send = document.querySelector('.but')
const dispatch = document.querySelector('.butter')
const sender = document.querySelector('.rat')
const dispatcher = document.querySelector('.cat')
const boy = document.getElementById('nav-home');
const girl = document.getElementById('nav-profile');

//Big width controler


//initiator
function bigPurple() {
    send.addEventListener('click', turnPurple)
}

function bigYellow() {
    dispatch.addEventListener('click', turnYellow)
}

// brain/sense "don't touch "

let turnPurple = function() {
    send.classList.add('purplo');
    dispatch.classList.remove('yello');
    normalBoy()
    stopSwitchVisible()
    stopSeeVisible()
}

let turnYellow = function() {
    dispatch.classList.add('yello');
    send.classList.remove('purplo');
    normalGirl()
    stopSwitchVisible()
    stopSeeVisible()
}

//small width controler


//initiator
function smallPurple() {
    sender.addEventListener('click', intoPurple)
}

function smallYellow() {
    dispatcher.addEventListener('click', intoYellow)
}

// brain/sense "don't touch "

let intoPurple = function() {
    sender.classList.add('purploo');
    dispatcher.classList.remove('yelloo');
    normalBoy()
    stopSwitchVisible()
    stopSeeVisible()
}

let intoYellow = function() {
    dispatcher.classList.add('yelloo');
    sender.classList.remove('purploo');
    normalGirl()
    stopSwitchVisible()
    stopSeeVisible()
}

//mediaquery controler for big and small screen width
if (window.matchMedia("(max-width: 768px)").matches) {
    smallYellow()
    smallPurple() //"The screen is less than, or equal to, 700 pixels wide.";
} else {
    bigPurple()
    bigYellow() //"The screen is at least 700 pixels wide.";
}


// switch brain/sense "don't touch"
let switchVisible = function() {
    boy.classList.toggle('show')
    boy.classList.toggle('active')

}

let seeVisible = function() {
    girl.classList.toggle('show')
    girl.classList.toggle('active')
    boy.classList.remove('show')
    boy.classList.remove('active')
}

// switch initiator n timer
var myGuy = setInterval(seeVisible, 10000);

var myVar = setInterval(switchVisible, 20000);

// to stop div switching to infinite

function stopSeeVisible() {
    clearInterval(myGuy);
}

function stopSwitchVisible() {
    clearInterval(myVar);
}

// to prevent div collaps "counter-measure"/normaliser

let normalBoy = function() {
    boy.classList.add('active')
    boy.classList.add('show')
    girl.classList.remove('active')
    girl.classList.remove('show')
        // girl.classList.remove('faders')
}

let normalGirl = function() {
    girl.classList.add('active')
    girl.classList.add('show')
    boy.classList.remove('active')
    boy.classList.remove('show')
        // boy.classList.remove('faders')
}