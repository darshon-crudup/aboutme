'use strict';

let userName = prompt('What is your name?');

alert(`Welcome to my website ${userName}!  Shall we play a guessing game...Please answer yes or no`);

let quest1Guess = prompt('Did Bruce Wayne get bit by a radioactive spider?').toLowerCase();

if(quest1Guess === 'no' || quest1Guess === 'n'){
  alert('Correct!');
} else if(quest1Guess === 'yes' || quest1Guess === 'y'){
  alert('Incorrect!');
}

let quest2Guess = prompt('Did Spiderman come from the plant Krypton?').toLowerCase();

if(quest2Guess === 'no' || quest2Guess === 'n'){
  alert('Correct!');
} else if(quest2Guess === 'yes' || quest2Guess === 'y'){
  alert('Incorrect!');
}

let quest3Guess = prompt('Did Tony Starks create Iron Man?').toLowerCase();

if(quest3Guess === 'yes' || quest3Guess === 'y'){
  alert('Correct!');
} else if(quest3Guess === 'no' || quest3Guess === 'n'){
  alert('Incorrect!');
}

let quest4Guess = prompt('Is the Hulk a mean green fighting machine?').toLowerCase();

if(quest4Guess === 'yes' || quest4Guess === 'y'){
  alert('Correct!');
} else if(quest4Guess === 'no' || quest4Guess === 'n'){
  alert('Incorrect!');
}

let quest5Guess = prompt('Does Spiderman fight crime in the batmobile?').toLowerCase();

if(quest5Guess === 'no' || quest5Guess === 'n'){
  alert('Correct!');
} else if(quest5Guess === 'yes' || quest5Guess === 'y'){
  alert('Incorrect!');
}

alert(`Thanks for playing our guessing game ${userName}! Your the real hero!`)
