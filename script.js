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
  size = Number.parseInt(size, 10);
  // if size is NaN then return an error
  if (Number.isNaN(size)) {
    alert("Invalid format.  Please enter a valid number between 3 and 10.");
    return '';
  }
  if (size < 3 || size > 10) {
    alert("Invalid length.  Please use a value between 3 and 10.");
    return '';
  }
  console.log('size', size, typeof size);

  var isEven = prompt("Do you want this to be an even or odd number?");

  if (isEven === "even") {
    isEven = true;
  } else if (isEven === "odd") {
    isEven = false;
  } else {
    alert("Invalid number type. Please specify 'even' or 'odd'.");
    return '';
  }

  console.log('isEven', isEven, typeof isEven);

  var isPositive = confirm("Press OK to create a positive number.\nPress Cancel to create a negative number.");
  console.log('isPositive', isPositive, typeof isPositive);
  // confirm: negative or positive?

  // generate a number

  return 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writeNumber);
