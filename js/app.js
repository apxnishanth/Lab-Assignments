'user-strict';

var username = prompt('Why dont you start with telling me your name?');
consoleMessage(username);

var myName = prompt('Howdy..!' + username + ' Let me start with a simple question.What\'s my Name?');
consoleMessage(myName);

if (myName.toUpperCase() === 'NISHANTH'){
  alert('Awesome!..' + username + '. You had it right..');
}else {
  alert('You were close.'+ username + '.  But no issues.Lets keep going');
}

var cities = ['Boston','Seattle','New York','California'];

for (var i = 0; i < 3; i++){
  var myCity = prompt ('Which city do I live? Choose from ' + cities );
  consoleMessage(myCity);
  if (myCity.toUpperCase() === 'SEATTLE' ){
    alertMessage();
    break;
  }
  else {
    alert('Nah..That city didnt interest me to live there..Give it one more try');
  }
}

var myBirthdayYear = prompt ('Was I born in 1999?');
consoleMessage(myBirthdayYear);

if (myBirthdayYear.toUpperCase() === 'YES' || myBirthdayYear.toUpperCase() === 'Y' ) {
  alert('No way... I am not that old.. I was born in 1986');
} else {
  alertMessage();
}

var myFavoriteCusine = prompt('Is my favorite cusine Italian?');
consoleMessage(myFavoriteCusine);

if (myFavoriteCusine.toUpperCase() === 'YES' || myFavoriteCusine.toUpperCase() === 'Y' ) {
  alertMessage();
} else {
  alert('Nah..You are wrong.Better luck next time!');
}

for (var j = 0; j <= 6; j++){
  var myFavoriteNumber = prompt('What is my favorite number ?');
  consoleMessage(myFavoriteNumber);
  if (myFavoriteNumber === '6'){
    alertMessage();
    break;
  }
  while (myFavoriteNumber <= '5') {
    alert('Thats lower than my favorite.Let me give you one more try');
    break;
  }
  if (myFavoriteNumber > '6'){
    alert('Thats higher than my favorite.Let me give you one more try');
  }
}


var favoriteMoviesArray = ['Usual Suspects','The Dark Knght','The Shining','The Wailing','Avatar'];

var flag = false;
for (var z = 0; z <= 3; z++) {
  var myFavoriteMovie = prompt('Could you guess my favorite movie?');
  consoleMessage(myFavoriteMovie);
  for (var k = 0; k <= 4; k++){
    if (favoriteMoviesArray[k] === myFavoriteMovie){
      alertMessage();
      flag = true;
      break;
    }
    if (flag === true) { break;}
  }
}

function alertMessage() {
  alert('You guessed it right..!');
}

function consoleMessage(userResponse) {
  console.log('Visitor answered :',userResponse);
}
alert('Thanks for playing the game! Good luck!');
