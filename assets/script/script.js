// Assignment Code
var generateBtn = document.querySelector("#generate");

//These variables and the following function create the full character array using ASCII character list
var lowerCaseChars = arrayFromLowToHigh(97, 122);
var upperCaseChars = arrayFromLowToHigh(65, 90);
var numericChars = arrayFromLowToHigh(48, 57);
var specialChars = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array;
}

function generatePassword() {

  //These are the prompts that will generate to ask which characters should be included in the final array
  var passwordLength = prompt ("Please choose a length for your password between 8 and 128 characters.");
  var lowerCaseChoice = confirm ("Would you like to include lower case characters in your password?");
  var upperCaseChoice = confirm ("Would you like to include upper case characters in your password?");
  var numericChoice = confirm ("Would you like to include numeric characters in your password?");
  var specialChoice = confirm ("Would you like to include special characters in your password?");
  var chosenChars = [];
  const passwordResult = [];

  var numOfChars = parseInt (passwordLength);
  
  // The following if statements will return an alert if the user does not choose a password within the proper length of characters or does not choose any characters
  if (passwordLength < 8 || passwordLength > 128) {
   alert ("Your password must be between 8 and 128 characters!");
   return;
  }
  if (!lowerCaseChoice && !upperCaseChoice && !numericChoice && !specialChoice) {
    alert("You must choose some characters to be included in your password!")
    return;
  }

  // The following statements will include the chosen characters in the final array if chosen by the user
  if (lowerCaseChoice) {
    chosenChars = chosenChars.concat(lowerCaseChars);
  }
  if (upperCaseChoice) {
    chosenChars = chosenChars.concat(upperCaseChars);
  }
   if (numericChoice) {
    chosenChars = chosenChars.concat(numericChars);
  }
  if (specialChoice) {
    chosenChars = chosenChars.concat(specialChars);
  }
  
  // The following for loop is what generates the password using the previously determined parameters
  for (var i=0; i < numOfChars; i++) {
    var randomPassword = chosenChars[Math.floor(Math.random() * chosenChars.length)]
    passwordResult.push(String.fromCharCode(randomPassword));
  }

  console.log(passwordResult);

  return passwordResult.join('');
  
}

// This following function was part of the original code.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
