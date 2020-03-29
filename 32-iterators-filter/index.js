/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */
const noStrings = array => array.filter(element => typeof element !== "string");

console.log(noStrings([1, "Giulia", "Cat", 8, true]));
/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */
const justStrings = array =>
  array.filter(element => typeof element === "string");

console.log(justStrings([1, "Giulia", "Cat", 8, true]));
/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */
const justStringsLongerThan5 = array =>
  array.filter(element => typeof element === "string" && element.length > 5);

console.log(
  justStringsLongerThan5([1, "Giulia", "Cat", 8, true, "Prezzemolo"])
);
/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */
const numbersMoreThan13 = array =>
  array.filter(element => typeof element === "number" && element > 13);

console.log(numbersMoreThan13(["Giulia", true, 54, 8]));
/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */
const objectsOnly = array =>
  array.filter(element => typeof element === "object");

console.log(
  objectsOnly([
    (movie = [
      {
        title: "1917",
        year: 2019,
        director: "Sam Mendes"
      },
      {
        title: "The Godfather",
        year: 1972,
        director: "Francis Ford Coppola"
      },
      {
        title: "Toy Story",
        year: 1995,
        director: "John Lasseter"
      }
    ]),
    "Giulia",
    5,
    true
  ])
);
/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */
const truthyOnly = array => array.filter(element => Boolean(element) !== false);

console.log(truthyOnly([true, "Giulia", 5, NaN]));
