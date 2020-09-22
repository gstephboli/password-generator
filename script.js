// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  // var passwordLength = 0;
  // while (
  //   passwordLength < 8 ||
  //   passwordLength > 128 ||
  //   isNaN(passwordLength) ||
  //   Number.isInteger(+passwordLength) != true
  // ) {
  //   passwordLength = prompt("Choose between 8 and 128 characters.");
  //   if (passwordLength === null) {
  //     // allow to go to the next question
  //     break;
  //   } else {
  //     if (passwordLength < 8) {
  //       alert("Password length must be longer than 8 characters");
  //     } else if (passwordLength > 128) {
  //       alert("Password length must be less than 129 characters.");
  //     } else if (
  //       isNaN(passwordLength) ||
  //       Number.isInteger(+passwordLength) != true
  //     ) {
  //       alert(
  //         "Password length must be a whole number greater than 8 but less than 129"
  //       );
  //     }
  //   }
  // }
  // if (passwordLength === null) {
  //   return "Cancelled Generated Password";
  // }
  // // console.log(+passwordLength);
  // while ()
  // var lowerCase = confirm("Click OK to use lowercase letters.");
  // var upperCase = confirm("Click OK to use uppercase letters.");
  // var numeric = confirm("Click OK to use numbers.");
  // var specialChar = confirm("Click OK to use special characters.");
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
}

function generatePassword() {
  var lowerCaseCharString = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharString = "0123456789";
  var specialCharString = " !\"#$%&'()*+,-./:;<>=?@[]^_`{}|~";
  var passwordCharSet = "";

  var lowerCase;
  var upperCase;
  var numeric;
  var specialChar;
  // will check to see if at least one character type has been chosen
  var characterChoice = false;
  var finalPasswordString = "";

  var passwordLength = 0;
  while (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(passwordLength) ||
    Number.isInteger(+passwordLength) != true
  ) {
    passwordLength = prompt("Choose between 8 and 128 characters.");
    if (passwordLength === null) {
      // allow to go to the next question
      break;
    } else {
      if (passwordLength < 8) {
        alert("Password length must be longer than 8 characters");
      } else if (passwordLength > 128) {
        alert("Password length must be less than 129 characters.");
      } else if (
        isNaN(passwordLength) ||
        Number.isInteger(+passwordLength) != true
      ) {
        alert(
          "Password length must be a whole number greater than 8 but less than 129"
        );
      }
    }
  }
  if (passwordLength === null) {
    return "Cancelled Generated Password";
  }
  // console.log(+passwordLength);
  while ()
  var lowerCase = confirm("Click OK to use lowercase letters.");
  var upperCase = confirm("Click OK to use uppercase letters.");
  var numeric = confirm("Click OK to use numbers.");
  var specialChar = confirm("Click OK to use special characters.");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
