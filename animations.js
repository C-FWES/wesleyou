//Name animation
nameTransform = () => {
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
};

nameTransform2 = () => {
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
    
    var word = document.getElementById('main-name-2');
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
    };

    nameTransform3 = () => {
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
        
        var word = document.getElementById('main-name-3');
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
        };



cmatrix = () => {
    const canvas = document.getElementById('canv');
    const ctx = canvas.getContext('2d');
    const w = canvas.width = document.body.clientWidth;
    const h = canvas.height = document.body.clientWidth;
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    matrix = () => {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);
        ctx.shadowColor = "#686868";
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';

        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) {
                ypos[ind] = 0;
            }
            else {
                ypos[ind] = y + 20;
            }
        });
    };
    setInterval(matrix, 50);
};