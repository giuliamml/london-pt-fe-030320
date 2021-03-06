// install and  import "readline-sync" npm package before you do exercises
var readlineSync = require("readline-sync");
/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */

var name = readlineSync.question("May I have your name? ");
console.log(`Hi ${name}!`);

//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 *
 *
 */
var selectedSymbol = readlineSync.question(
  `Want to do some math? insert +, -, * or / `
);
var symbolUndefined = true;

while (symbolUndefined) {
  if (
    selectedSymbol.includes("+") ||
    selectedSymbol.includes("-") ||
    selectedSymbol.includes("*") ||
    selectedSymbol.includes("/")
  )
    symbolUndefined = false;
  else {
    selectedSymbol = readlineSync.question(
      `Want to do some math? insert +, -, * or /`
    );
  }
}

/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
var number1 = readlineSync.question(`Enter first number `);

while (typeof parseFloat(number1) != "number" || isNaN(parseFloat(number1))) {
  number1 = readlineSync.question(`Enter first number `);
}
/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
var number2 = readlineSync.question(`Enter second number `);

while (typeof parseFloat(number2) != "number" || isNaN(parseFloat(number2))) {
  number2 = readlineSync.question(`Enter second number `);
}
/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */
var result = 0;
console.log(selectedSymbol, typeof selectedSymbol);


switch (selectedSymbol) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    result = number1 / number2;
}

console.log("=====================");
console.log(`Here you go, the result is ${result}`);
