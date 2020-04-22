var generateBtn = document.querySelector("#generate");
var passwordCharacters = [];
var uppercaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLettersArray = ["a", "b", "c",	"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];


function passwordQuestions() {
  var passwordLength = prompt('How long would you like your password to be? Choose a number between 8 - 128.');
  var uppercaseLetters = confirm('Would you like uppercase letters?');
  var lowercaseLetters = confirm('Would you like lowercase letters?');
  var numbers = confirm ('Would you like numbers?');
  var specialCharacters = confirm ('Would you like special characters?');
  var options = {
     passwordLength: passwordLength,
     uppercaseLetters: uppercaseLetters,
     lowercaseLetters: lowercaseLetters,
     numbers: numbers,
     specialCharacters: specialCharacters}
  return options;
}

function generatePassword() {
  var options = passwordQuestions();
  // console.log(options);
  //alert(options)
  if (options.uppercaseLetters) {
    // alert("You are using uppercase letters.")
    passwordCharacters = passwordCharacters.concat(uppercaseLettersArray);
  }
  if (options.lowercaseLetters) {
    passwordCharacters = passwordCharacters.concat(lowercaseLettersArray);
  }
  if (options.numbers) {
    passwordCharacters = passwordCharacters.concat(numbersArray);
  }
  if (options.specialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharactersArray);
  }

  for (var i = 0; i < options.passwordLength; i++) {

      var randomCharacter = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      var password = password + randomCharacter;




    // write the logic on each loop to pick one random char from passwordCharacters arr.
    // you need to push this random char into (something)
  }
  
  return password;
  //return (something)

  //reset stats?
}


// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //gp => func 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
//document.querySelector("#generate").addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);

