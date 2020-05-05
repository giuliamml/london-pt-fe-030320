const ingredients = [
  { name: "carrot", time: 500 },
  { name: "potato", time: 1000 },
  { name: "onion", time: 250 },
  { name: "celery", time: 150 },
  { name: "tomato", time: 100 },
];

/**
 * Exercise 1
 *
 * create a function {asyncCookIngredient} which takes 1 argument:
 *
 * an {ingredient} object (like the objects in the array on line 1)
 * with 2 keys: name and time.
 *
 * Return a promise which gets resolved after the time has elapsed.
 *
 * The value used to resolve the promise should be the original
 * {ingredient} object
 *
 */
const asyncCookIngredient = ({ name, time }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: name, time: time });
    }, time);
  });
};


/**
 * Exercise 2
 *
 * create a function {asyncCookMeal} which will recieve an
 * array of {ingredientsToCook} and call {asyncCookIngredient} for
 * each ingredient
 *
 * Return a promise which gets resolved after all of the
 * ingredients are cooked
 *
 * The value used to resolve the promise should be and object
 * containing an array of {ingredientNames} and the {totalTime}:
 *
 * {
 *  ingredientNames: ["carrot", "onion"],
 *  totalTime: 750
 * }
 *
 */

const asyncCookMeal = (array) => {
  let newArray = array.map(asyncCookIngredient);

  return Promise.all(newArray).then(() => {
    return {
      ingredientNames: array.map((el) => el.name),
      totalTime: array.reduce((acc, el) => {
        return acc + el.time;
      }, 0),
    };
  });
};

asyncCookMeal(ingredients).then((result)=>{console.log(result)});
