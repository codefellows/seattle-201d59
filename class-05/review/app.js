'use strict';

/**
 * Ask the user for their name
 *  We only want to start the next question if the user has given a valid name.
 * Ask if they are ready to play
 * Ask them a series of questions
 */


// global variable for name 
var questions = [
  ['Is the sky blue?', 'yes', 'y'],
  ['Whats is one of my favorite foods?', 'bacon', 'ice cream', 'chili'],
];
var emptyArray = [];
// var answers = ['yes'];
var correctAnswers = 0;
var username = prompt('What is your name?');
validateName();
askQuestions();

// Validate a name value
function validateName() {
  // if (!username) {
  //   username = prompt('No really I need you name');
  // } else {
  //   alert('Great lets get started');
  // }
  while (!username) {
    username = prompt('No really I need your name');
  }
  alert('Great lets get started');
}

function askQuestions() {
  var response = '';
  if (username) {

    // loop through questions array and ask them in a prompt
    for (var outer = 0; outer < questions.length; outer++) {
      var isResponseCorrect = false;

      // ask questions until isResponsCorrect is true
      do {
        // actually asking the question
        response = prompt(questions[outer][0]);

        // check if response is inside nested array values
        for (var inner = 1; inner < questions[outer].length; inner++) {
          if (response === questions[outer][inner]) {
            alert('Youre correct!!');
            isResponseCorrect = true;
            emptyArray.push(questions[outer][0]);
            correctAnswers += 1;
            break;
          }
        }
        if (!isResponseCorrect) alert('Sorry thats wrong');

      } while (!isResponseCorrect)
    }
  }
}

function notUsed() {
  for (var j = 0; j < answers.length; j++) {
    prompt(answers[j]);
  }
}

