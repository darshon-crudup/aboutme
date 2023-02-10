'use strict';

let userName = prompt('What is your name?');

alert(`Welcome to my website ${userName}!  Shall we play a guessing game...Please answer yes or no`);


function question1 (){
  let quest1Guess = prompt('Did Bruce Wayne get bit by a radioactive spider?').toLowerCase();

  if(quest1Guess === 'no' || quest1Guess === 'n'){
    alert('Correct!');
  } else if(quest1Guess === 'yes' || quest1Guess === 'y'){
    alert('Incorrect!');
  }
}

question1();


function question2 (){
  let quest2Guess = prompt('Did Spiderman come from the plant Krypton?').toLowerCase();

  if(quest2Guess === 'no' || quest2Guess === 'n'){
    alert('Correct!');
  } else if(quest2Guess === 'yes' || quest2Guess === 'y'){
    alert('Incorrect!');
  }
}

question2();

function question3(){
  let quest3Guess = prompt('Did Tony Starks create Iron Man?').toLowerCase();

  if(quest3Guess === 'yes' || quest3Guess === 'y'){
    alert('Correct!');
  } else if(quest3Guess === 'no' || quest3Guess === 'n'){
    alert('Incorrect!');
  }
}

question3();

function question4 (){
  let quest4Guess = prompt('Is the Hulk a mean green fighting machine?').toLowerCase();

  if(quest4Guess === 'yes' || quest4Guess === 'y'){
    alert('Correct!');
  } else if(quest4Guess === 'no' || quest4Guess === 'n'){
    alert('Incorrect!');
  }
}

question4();

function question5(){
  let quest5Guess = prompt('Does Spiderman fight crime in the batmobile?').toLowerCase();

  if(quest5Guess === 'no' || quest5Guess === 'n'){
    alert('Correct!');
  } else if(quest5Guess === 'yes' || quest5Guess === 'y'){
    alert('Incorrect!');
  }
}

question5();

alert(`Thanks for playing our guessing game ${userName}! Your the real hero!`)

alert('Round Two. Lets play another game. Guess a number 1-4');

function question6(){
  let answer = 3;
  let guess = prompt("Take a guess of my number");

  for (let i = 0; i < 4; i++){
    if(answer === parseInt(guess)){
      alert("CORRECT");
      break;
    } else if(answer > guess){
      guess = prompt("PLEASE TRY AGAIN, GUESS TOO LOW");
    } else {
      guess = prompt("PLEASE TRY AGAIN, GUESS TOO HIGH");
    }
  }
}
question6();

function question7(){
////Creating our variables
let guesses = 0;
let userguess = 6;
let correct = false

let cars = ['mcclaren','bugatti','maserati','porsche','ferrari','lamborghini'];

while (userguess > guesses && correct === false){
let quest7Guess = prompt('I love exotic automobiles, can you guess what my favorite dream car is?').toLowerCase();
console.log (guesses)

for(let j = 0; j < cars.length; j++){
if(quest7Guess === cars[j]){
alert("CORRECT");

score++
correct = true
break; 
}

}
alert("TRY AGAIN, YOU GOT THIS!"); 
guesses++
}
alert(`Here are all of my fav cars: ${cars}`);
}
question7();

//// If user guesses correctly prompt ends

//// if user runs out of attempts

////display all possible correct answers to user

////display score with correct number of answers
