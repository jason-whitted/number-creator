// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write number to the #number input
function writeNumber() {
  var number = generateNumber();
  var numberText = document.querySelector("#number");

  numberText.value = number;

}

function generateNumber() {
  return 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writeNumber);
