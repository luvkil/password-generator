
//Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  console.log(passwordText);

  passwordText.value = password;

}

//Characters
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var randomPassword = [];
  var finalPass= [];

  var passwordLength = parseInt(prompt("what lentgh would you like your password?"))

  if (isNaN(passwordLength)) {
    alert("Must be a number")
  }
  if (passwordLength > 128) {
    alert("Length must be between 8 and 128 characters")
    return
  }

  if (passwordLength < 8) {
    alert("Please select length between 8 and 128 characters")
    return
  }

  if (passwordLength > 128) {
    alert("Please select length between 8 and 128 characters")
    return
  }

  var hasNumbers = confirm("Do you want to include numbers?");
  var haslowerCase = confirm("Do you want to include lowercase letters?");
  var hasspecialCharacters = confirm("Do you want to include special characters?");
  var hasupperCase = confirm("Do you want to include uppercase letters?");

 // "numbers","specialCharacters","lowerCase","upperCase"
//var RandomItem = myArray[Math.floor(Math.floor()*myArray.length)];


  if (!hasNumbers && !haslowerCase && !hasspecialCharacters && !hasupperCase) {
    alert("Must choose at least one option")
  }

  if (hasNumbers) {
    finalPass = finalPass.concat(numbers);
  }

  if (haslowerCase) {
    finalPass = finalPass.concat(lowerCase);
  }

  if (hasspecialCharacters) {
    finalPass = finalPass.concat(specialCharacters);
  }

  if (hasupperCase) {
    finalPass = finalPass.concat(upperCase);
  }

  for (var i = 0; i < passwordLength; i++) {
    console.log(finalPass);
    var randomIndex = Math.floor(Math.random() * finalPass.length);
    console.log(randomIndex);
    var randomCharacter = finalPass[randomIndex];
    console.log(randomCharacter);
    randomPassword.push(randomCharacter);
    console.log(randomPassword)
  }



  return randomPassword.join("");
  //return ('Goodbye');
};


