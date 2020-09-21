// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  prompt("Choose between 8 and 128 characters");
  confirm("Do you want uppercase letters?");
  confirm("Do you want lowercase letters?");
  confirm("Do you want numbers?");
  confirm("Do you want special characters?");
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


