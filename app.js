/*
input: string (prompt)
output: string (alert)
*/

//Set the answer
let answer = 5 //Math.floor(Math.random() * 10 + 1);

//input
var name = prompt("What is your name?");
var input = prompt("Please enter an  integer from 1 to 10");

// edge cases: Number(true) === 1; Number(false) === Number(' ') === Number(null) === 0;

var count = 0;
var guesses = {};
var regame;
function play() {
    while (true) {
        if (input === null) {
            alert('See you next time!');
            break;
        }
        var num = Number(input); //convert string to number
        var isSV = (input.trim() === ''); //is it a special value?
        var isI = Number.isInteger(num) === true; //is it an integer?
        if (isSV || (!isI)) {
            input = prompt('Please enter a VALID integer between 1 and 10');
        } else {
            count += 1;
            if (num > answer) {
                input = prompt(`Sorry ${name}, Guess Lower`);
            } else if (num < answer) {
                input = prompt(`Sorry ${name}, Guess Higher`);
            } else {
                if (guesses.name === undefined) {
                    alert( `That\'s Correct ${name}! It only took you ${count} guesses!`);
                    guesses.name = count;
                } else {
                    if (count < guesses.name) {
                        var dif = guesses.name - count;
                        guesses.name = count;
                        alert(`That's Correct ${name}! And you beat your personal best by ${dif} fewer guess!`);
                    } else if (count > guesses.name) {
                        dif = count - guesses.name;
                        alert(`That's Correct ${name}! And you miss your personal best by ${dif} fewer guess!`);
                    }
                }
                
                while (true) {
                    regame = prompt("Would you like to play again? Yes/No?");
                    if (regame === null || regame === 'No') {
                        console.log(regame);
                        alert('See you next time!!');
                        return;
                    } else if (regame !== 'Yes') {
                        console.log(regame);
                        regame = prompt("Please enter only 'Yes' or 'No'.");
                        if (regame === 'No') {
                            alert('See you next time!!!');
                            return;
                        } else if (regame === 'Yes') {
                            input = prompt('Please enter an Integer between 1 and 10.');
                            count = 0;
                            break;
                        }
                    } else if (regame === 'Yes') {
                        input = prompt('Please enter an Integer between 1 and 10.');
                        count = 0;
                        break;
                    }
                }
            }           
        }
    }
}
play();


