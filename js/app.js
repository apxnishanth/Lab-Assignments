'user-strict';

var username = prompt('Why dont you start with telling me your name?');
console.log('Visitor Name: ', username);

var myName = prompt('Howdy..!' + username + ' Let me start with a simple question.What\'s my Name?');
console.log('Visitor answered: ' ,myName);

if (myName.toUpperCase() === 'NISHANTH'){
  alert('Awesome!..' + username + 'You had it right..');
}else {
  alert('You were close.'+ username + '.  But no issues.Lets keep going');
}

var cities = ['Boston','Seattle','New York','California'];

for (var i = 0; i < 3; i++){
  var myCity = prompt ('Which city do I live? Choose from ' + cities );
  if (myCity.toUpperCase() === 'SEATTLE' ){
    alert('No Way.. You are too awesome.You guessed it correct.');
    break;
  }
  else {
    alert('Nah..That city didnt interest me to live there..Give it one more try');
  }
}

var myBirthdayYear = prompt ('Was I born in 1999?');
console.log('Visitor answered :',myBirthdayYear);

if (myBirthdayYear.toUpperCase() === 'YES' || myBirthdayYear.toUpperCase() === 'Y' ) {
  alert('No way... I am not that old.. I was born in 1986');
} else {
  alert('Kudos!!You guessed it right!!');
}

var myFavoriteCusine = prompt('Is my favorite cusine Italian?');
console.log('Visitor answered :',myFavoriteCusine);

if (myFavoriteCusine.toUpperCase() === 'YES' || myFavoriteCusine.toUpperCase() === 'Y' ) {
  alert('Thats true..! I love Italian cuisine');
} else {
  alert('Nah..You are wrong.Better luck next time!');
}

alert('Thanks for playing the game! Good luck!');

