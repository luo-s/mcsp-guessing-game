/*
input: string (prompt)
output: string (alert)
*/

//Define Variables First
var names;
var answer;
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
      alert("See you next time!");
      return false;
    }
    var num = Number(str); //convert string to number
    var isSV = str.trim() === ""; //is it a special value?
    var isI = Number.isInteger(num) === true; //is it an integer?
    if (isSV || !isI) {
      str = prompt("Please enter a VALID integer between 1 and 10");
    } else {
      count++;
      return num;
    }
  }
}
//check the answer: if not correct -> return input; if correct -> return replay option.
function check(secretN, n) {
  if (n > secretN) {
    return (input = prompt(`Sorry ${names}, Guess Lower`));
  } else if (n < secretN) {
    return (input = prompt(`Sorry ${names}, Guess Higher`));
  } else if (n === secretN) {
    if (guesses[`${names}`] === undefined) {
      alert(`That\'s Correct ${names}! It only took you ${count} guesses!`);
      guesses[`${names}`] = count;
    } else {
      if (count < guesses[`${names}`]) {
        dif = guesses[`${names}`] - count;
        guesses[`${names}`] = count;
        alert(
          `That's Correct ${names}! And you beat your personal best by ${dif} fewer guess!`
        );
      } else if (count > guesses[`${names}`]) {
        dif = count - guesses[`${names}`];
        alert(
          `That's Correct ${names}! And you miss your personal best by ${dif} more guess!`
        );
      } else {
        alert(
          `That's Correct ${names}! And you did the same as your personal best!`
        );
      }
    }
    console.log(guesses);
    return true;
  }
}
//validate regame input (str) -> boolean: true (replay) false (quit);
function regameValid(str) {
  while (true) {
    if (str === null || str === "N" || str === "n") {
      alert("See you next time!!");
      return false;
    } else if (str !== "Y" && str !== "y") {
      str = prompt("Please enter only 'Y' or 'N'.");
    } else {
      count = 0;
      return true;
    }
  }
}
//replay
function replay() {
  while (true) {
    regame = prompt("Would you like to play one more time? Y/N?");
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
  names = prompt("Welcome! What is your name?");
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
play();
replay();
