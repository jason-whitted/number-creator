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

  var allDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var nonZeroDigits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var evenDigits = ["0", "2", "4", "6", "8"];
  var oddDigits = ["1", "3", "5", "7", "9"];

  var generated = "";

  // Math.floor(Math.random() * MAX)


  // leading number must be one of the `nonZeroDigits`
  var nonZeroIndex = Math.floor(Math.random() * nonZeroDigits.length);
  generated = generated + nonZeroDigits[nonZeroIndex];

  // generate a number:
  //   size: 3 -> 123, 8 -> 12345678
  //   isEven: even? last digit must be one of the `evenDigits`
  //           odd? last digit must be one of the `oddDigits`
  //   positive: positive? leave the number alone
  //             negative? multiply the number by -1


  console.log('generated', generated, typeof generated);
  // convert `generated` to number
  return 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writeNumber);
