/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */

function getIntegersOnly(array) {
    var newArray = [];
  for (const value of array) {
      if (value % 1 == 0 && typeof(value) == 'number') {
        newArray.push(value);
      }

  }

  return newArray;
}
getIntegersOnly([2, 5, 1.5])
/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */
function getEvenNumbers(array) {
    var newArray = [];
  for (const value of array) {
    if (value % 2 === 0) {
        newArray.push(value);
    }
    
   
  }

  return newArray;
}
//getEvenNumbers([0, 5, 1.5]);
console.log(getEvenNumbers([0, 5, 1.5]))

/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */
function getEvenNumbersFromMixedArray(array){
    var newArray = [];
    for ( const value of array ){
        if (value % 2 === 0 && typeof(value) == 'number'){
           
            newArray.push(value);
        } 
       
    }
    return newArray;
}

getEvenNumbersFromMixedArray([-3, 2, 5, 1.5])
/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */
function getOddNumbers(array){
    var newArray = [];
    for (const value of array){
        if (value % 2 !== 0 && typeof(value) == 'number'){
            newArray.push(value);
        }
        
        
    }
    return newArray;
}

getOddNumbers([1, 2, 3, 4]);
/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */
function evenOddTransform(array){
    let newArray = [];
    for ( const value of array){
        if (value % 2 !== 0){
            newArray.push(value + 1);
        } else {
            newArray.push(value - 1);
        }
    }
    return newArray
}
evenOddTransform([1,2,3,4,5]);