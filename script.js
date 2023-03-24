/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];
var index = Math.floor(Math.random() * password.length)

function generatePassword() {
    var password = prompt("Enter Password length between 8 & 129 Characters long")
    if (password < 8 || password > 129) {
        alert("Password MUST be between 8 & 129 characters")
        return;
    } else if (password > 8 && password < 129) {
        var includeCapLetters = confirm("Would you like capital letters in your password?");
        var inclueLowLetters = confirm("Would you like lowercase letters in your password?");
        var includeNumbers = confirm("Would you like numbers in your password?")
        var includeSpecialChar = confirm("Would you like special characters in your password?")

        
// how am i getting user password length (look at rock paper sci example)
// is user length more than 8 but less than 100


 var myArr = [1, 2, 3]
 var myArr2 = ["a", "b", "c"]
 var newArray = []
 if (capLetters == true) (
    newArray.concat(capLetters)
 ) 

 var password = 10
 password

 for (let i = 0; i < password; i++) {

 }

// special character array : " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// array for upper case
// array for lower case
// array for numbers
// must include one of each

    return ;
}

if (!userChoice) {
    return;
  }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */