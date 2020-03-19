var container = document.getElementById("gameDivision");

var gameButton = document.getElementById('start')
document.getElementById('start').innerHTML = "Start"
gameButton.setAttribute('onclick', 'startGame ();')

//Game Beginning
function startGame() {
    for (let i = 0; i < 16; i++) {
        var digitDivs = document.createElement('div')
        digitDivs.id = `id${i}`
        digitDivs.className = "cells"
        digitDivs.setAttribute('onclick', 'divClick(this.id);')
        container.appendChild(digitDivs);
    }
    gameButton.setAttribute('disabled', 'true')
    restartButton();
    answerGenerator();
    console.log(ansArr)
};

//Number Generation
function generator(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//Answer Array Generation
var ansArr = [0, 1, 2, 3]
function answerGenerator() {
    let genString = generator(4);
    ansArr = genString.split('')
}


//Logicals
function divClick(divId) {
    (!hasValue(divId)) ?
        document.getElementById(divId).innerHTML = randomNumber : ''
    var randomNumber = generator(1);
    var ind = divId.split('d')[1] % 4;
    if (randomNumber == ansArr[ind]) {
        document.getElementById(divId).setAttribute('style', 'background-color: #69FF39');
    } else {
        document.getElementById(divId).setAttribute('style', 'background-color: #FF3939;');
    }
    document.getElementById(divId).innerHTML = randomNumber;
}


const hasValue = (id) => (
    Boolean(document.getElementById(id).innerText)
)


//Restart Game
function restartButton() {
    var getContainer = document.getElementById('container')
    var restartButton = document.createElement('button')
    restartButton.id = 'restart'
    restartButton.className = 'myButn'
    restartButton.innerText = "Restart"
    restartButton.setAttribute('onclick', 'restartGame()')
    getContainer.appendChild(restartButton)
}


function restartGame() {
    for (let i = 0; i < 16; i++) {
        document.getElementById(`id${i}`).innerHTML = ''
        document.getElementById(`id${i}`).setAttribute('style', 'background-color: #5D5D5D;')
    }
    ansArr = []
    answerGenerator()
    console.log(ansArr)
}
