var container = document.getElementById("gameDivision");

var gameButton = document.getElementById('start')
document.getElementById('start').innerHTML = "Start Game"
gameButton.setAttribute('onclick', 'startGame ();')


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
};

function generator(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let genString = generator(4);
var ansArr = genString.split('')

function divClick(divId) {
    (!hasValue(divId)) ?
        document.getElementById(divId).innerHTML = generator(1) : ''
}


const hasValue = (id) => (
    Boolean(document.getElementById(id).innerText)
)


//Restart Game
function restartButton() {
    var getContainer = document.getElementById('container')
    var restartButton = document.createElement('button')
    restartButton.id = 'restart'
    restartButton.innerText = "Restart Game"
    restartButton.setAttribute('onclick', 'restartGame()')
    getContainer.appendChild(restartButton)
}


function restartGame() {
    for (let i = 0; i < 16; i++) {
        document.getElementById(`id${i}`).innerHTML = ''
    }
}