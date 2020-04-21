/**
 * Exercise 1
 *
 * create a function {generateFibonacci} which will take a parameter
 * that represents a length of an array that needs to be generated
 *
 * The array must be a Fibonacci sequence:
 *
 * The next number is found by adding up the two numbers before it,
 * always starting with 0 and 1.
 *
 * Ex: generateFibonacci(5) // return [0, 1, 1, 2, 3];
 */

//var i;

function generateFibonacci(number) {
  let array = [];

  if (number === 1) {
    array[0] = 0;
  } else if (number === 2) {
    array[0] = 0;
    array[1] = 1;
  } else {
    array[0] = 0;
    array[1] = 1;

    for (let i = 2; i < number; i++) {
      array[i] = array[i - 2] + array[i - 1];
    }
  }

  return array;
}

console.log(generateFibonacci(3));
/**
 * Exercise 2
 *
 * create a function {isPowerOf} which takes 2 arguments:
 *
 * number – a number
 * primeNumber – a number (a prime number)
 *
 * return a Boolean if your number is a power of primeNumber
 *
 * Ex: isPowerOf(27, 3) // return true;
 */

function isPowerOf(number, primeNumber) {
  if (primeNumber === 1 && number === 1) {
    return true;
  } else if (number === 1) {
    return false;
  } else {
    var number_ = 1;
    while (number_ < number) {
      number_ = number_ * primeNumber;
    }
    return number_ === number;
  }
}

console.log(isPowerOf(1, 1));
