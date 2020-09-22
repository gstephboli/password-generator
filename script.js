// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // Declaring the characters that can be utilized to generate password
  var lowerCaseCharString = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharString = "0123456789";
  var specialCharString = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var passwordCharSet = "";

  var passwordLength = 0;
  // Declaring the variables for user to say yes or no to use in password
  var lowerCase;
  var upperCase;
  var numeric;
  var specialChar;
  // will check to see if at least one character type has been chosen
  var characterChoice = false;
  var finalPasswordString = "";

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
  console.log(+passwordLength);
  while (characterChoice === false) {
    lowerCase = confirm("Click OK to use lowercase letters.");

    if (lowerCase) {
      passwordCharSet += lowerCaseCharString;
    }

    upperCase = confirm("Click OK to use uppercase letters.");
    if (upperCase) {
      passwordCharSet += upperCaseCharString;
    }

    numeric = confirm("Click OK to use numbers.");
    if (numeric) {
      passwordCharSet += numericCharString;
    }

    specialChar = confirm("Click OK to use special characters.");
    if (specialChar) {
      passwordCharSet += specialCharString;
    }

    if (
      lowerCase === true ||
      upperCase === true ||
      numeric === true ||
      specialChar === true
    ) {
      characterChoice = true;
      console.log("You will get a password");
    } else {
      alert("Confirm at least one character type to include in password.");
    }
  }
  var numCharacterOptions = passwordCharSet.length;
  var passwordCharIndex;

  for (i = 0; i < passwordLength; i++) {
    passwordCharIndex = Math.floor(Math.random() * numCharacterOptions);
    console.log(passwordCharIndex);
    finalPasswordString += passwordCharSet[passwordCharIndex];
  }

  return finalPasswordString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
