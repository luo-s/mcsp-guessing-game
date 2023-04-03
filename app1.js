/*
input: string (prompt)
output: string (alert)
*/

//Set the answer
//alert('Welcome');
var answer;
//Define Variables First
var name = prompt("What is your name?");
var input; 
var count = 0;
var guesses = {};
var regame;
var dif;
//edge-cases: Number(true) === 1; Number(false) === Number(' ') === Number(null) === 0;
//validate user input (str) -> return (num)
function inputValid(str) {
    while (true) {
        if (str === null) {
            alert('See you next time!');
            return false;
        }
        var num = Number(str); //convert string to number
        var isSV = (str.trim() === ''); //is it a special value?
        var isI = Number.isInteger(num) === true; //is it an integer?
        if (isSV || (!isI)) {
            str = prompt('Please enter a VALID integer between 1 and 10');
        } else {
            count ++;
            return num;
        }
    }
}
//check the answer: if not correct -> return input; if correct -> return replay option.
function check(secretN, n) {
    if (n > secretN) {
        return input = prompt(`Sorry ${name}, Guess Lower`);
    } else if (n < secretN) {
        return input = prompt(`Sorry ${name}, Guess Higher`);
    } else if (n === secretN) {
        if (guesses.name === undefined) {
            alert(`That\'s Correct ${name}! It only took you ${count} guesses!`)
            guesses.name = count;
        } else {
            if (count < guesses.name) {
                dif = guesses.name - count;
                guesses.name = count;
                alert(`That's Correct ${name}! And you beat your personal best by ${dif} fewer guess!`);
            } else if (count > guesses.name) {
                dif = count - guesses.name;
                alert(`That's Correct ${name}! And you miss your personal best by ${dif} fewer guess!`);
            } else {
                alert(`That's Correct ${name}! And you did the same as your personal best!`);
            }
        }
        return true; 
    }
}
//validate regame input (str) -> boolean: true (replay) false (quit);
function regameValid(str) {
    while (true) {
        if (str === null || str === 'No') {
            alert('See you next time!!');
            return false;
        } else if (str !== 'Yes') {
            str = prompt("Please enter only 'Yes' or 'No'.");
        } else {
            count = 0;
            return true;
        }
    }
}
//replay
function replay() {
    while(true) {
        regame = prompt('Would you like to play one more time? Yes/No?');
        if (regameValid(regame) === true) {
            play();
        } else {
            return;
        }
    }
}
//play
function play() {
    answer = Math.floor(Math.random() * 10 + 1);
    input = prompt("Please enter an integer from 1 to 10");
    while (true) {
        var number = inputValid(input);
        if (number === false) {
            break;
        }
        if (check(answer, number) === true) {
            break;
        }
    }
return;
}
//execution
play()
replay()
