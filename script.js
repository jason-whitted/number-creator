// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write number to the #number input
function writeNumber() {
  var number = generateNumber();
  var numberText = document.querySelector("#number");

  numberText.value = number;

}

function generateNumber() {
  var size = prompt("What is the length?", "3");
  console.log('size', size, typeof size);
  //    valid values are >=3 && <=10

  var isEven = prompt("Do you want this to be an even or odd number?");
  console.log('isEven', isEven, typeof isEven);
  //   valid values are 'even' or 'odd'

  var isPositive = confirm("Press OK to create a positive number.\nPress Cancel to create a negative number.");
  console.log('isPositive', isPositive, typeof isPositive);
  // confirm: negative or positive?

  // generate a number

  return 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writeNumber);
