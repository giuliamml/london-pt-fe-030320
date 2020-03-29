// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */

const convertToPositive = array => {
  return array.map(num => {
    return num < 0 ? num * -1 : num;
  });
};

console.log(convertToPositive([1, -10, -4, 7]));

/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */

const getAllNames = array => {
  return array.map(array => {
    return array.name;
  });
};

console.log(
  getAllNames([
    { name: "Alex", age: 26 },
    { name: "John", age: 25 }
  ])
);
/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */

const greetAll = array => {
  return array.map(name => {
    return `Hi, ${name}!`;
  });
};

console.log(greetAll(["Giulia", "John", "Mat", "Rose"]));
/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */
const multiplyAllNumbers = array => {
  return array.map(number => {
    if (typeof number === "number") {
      return number * 5;
    } else return number;
  });
};

console.log(multiplyAllNumbers(["Giulia", 5, 8, 3]));
