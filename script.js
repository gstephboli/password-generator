// Assignment Code
var generateBtn = document.querySelector("#generate");
// Set variables for each item than can be included in the passwork
var lowerCase;
var upperCase;
var numeric;
var specChar;
var passwordLength = >= 8 || <= 128;

// Write password to the #password input
function writePassword() {
  prompt("Choose between 8 and 128 characters.");
  lowerCase = confirm("Click OK to use lowercase letters.");
  upperCase = confirm("Click OK to use uppercase letters.");
  numeric = confirm("Click OK to use numbers.");
  specChar = confirm("Click OK to use special characters.");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-+={}’",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


