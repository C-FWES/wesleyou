//Name animation
rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandLetter = () => {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return alphabet[rand(0, 25)]
}
getRandWord = (word) => {
    var text = word.innerHTML;
    var final = '';
    for (var i = 0; i < text.length; i++) {
        final += text[i] == ' ' ? ' ' : getRandLetter();
    }
    return final;
}

var word = document.getElementById('main-name');
var interv = 'undefined';
var canChange = false;
var globalCount = 0;
var count = 0;
var INITIAL_WORD = word.innerHTML;
var isGoing = false;

init = () => {
    if (isGoing) {
        return;
    }
    isGoing = true;
    var randomWord = getRandWord(word);
    word.innerHTML = randomWord;

    interv = setInterval(() => {
        var finalWord = ''
        for (var x = 0; x < INITIAL_WORD.length; x ++) {
            if (x <= count && canChange) {
                finalWord += INITIAL_WORD[x]
            }
            else {
                finalWord += getRandLetter();
            }
        }
        word.innerHTML = finalWord;
        if (canChange) {
            count += 1;
        }
        if (globalCount >= 20) {
            canChange = true;
        }
        if (count >= INITIAL_WORD.length) {
            clearInterval(interv);
            count = 0;
            canChange = false;
            globalCount = 0;
            isGoing = false;
        }
        globalCount += 1;
    },50);
}
window.addEventListener('DOMContentLoaded', init);