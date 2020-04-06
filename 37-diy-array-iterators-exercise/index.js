/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */
function forEach(array, callback) {
  for (const element of array) {
    callback(element, array.indexOf(element));
  }
}

/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */
function map(array, callback) {
  let newArray = [];
  for (const element of array) {
    newArray.push(callback(element, array.indexOf(element)));
  }
  return newArray;
}

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */
function filter(array, callback) {
  let newArray = [];
  for (const element of array) {
    if (callback(element, array.indexOf(element))) {
      newArray.push(element);
    }
  }
  return newArray;
}

/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */
function find(array, callback) {
  let foundItem;
  for (const element of array) {
    var test = callback(element, array.indexOf(element));

    if (test) {
      foundItem = element;
      break;
    }
  }
  return foundItem;
}

console.log(
  find([1, 2, 3, 4, 5], (el, idx) => {
    return el > 1;
  })
);
/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */
function findIndex(array, callback) {
  let i = 0;
  for (const element of array) {
    if (callback(element, array.indexOf(element))) {
      i = array.indexOf(element);
      break;
    }
  }
  return i;
}
/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
function every(array, callback) {
  var result = true;
  for (const element of array) {
    if (!callback(element, array.indexOf(element))) {
      var result = false;
    }
  }
  return result;
}

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
function some(array, callback) {
  var result = false;
  for (const element of array) {
    if (callback(element, array.indexOf(element))) {
      result = true;
      break;
    }
  }
  return result;
}
/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array,
 *
 *  and is passed
 * **the current cumulative value**,
 *
 *
 * each element
 *
 *  and the index.
 *
 *
 * Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */

function reduce(array, callback, initialValue) {
  var cumulativeVal = initialValue || 0;

  for (const element of array) {
    cumulativeVal = callback(cumulativeVal, element, array.indexOf(element));
  }
  return cumulativeVal;
}

// reduce(
//   [1, 2, 3],
//   (acc, el) => {
//     return (acc += el);
//   },
//   0
// );
