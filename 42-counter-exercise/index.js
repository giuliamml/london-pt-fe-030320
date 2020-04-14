let step = 0;
let counter = 0;

let auto;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */
let currentValueCounter = document.querySelector(".counter_value");

function action(symbol) {
  if (symbol === "+") {
    counter += step;
  }
  if (symbol === "-") {
    counter -= step;
  }
  currentValueCounter.innerText = counter;
  return counter;
}
/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */
form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let input = document.querySelector("input#step");

  step = parseInt(input.value);
  console.log(step);
  let span = document.querySelector("span.step_value");
  span.innerText = step;
  console.log(span.value);
  form.reset();
  return;
});

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
let decrementButton = document.querySelector("button#decrement");
decrementButton.addEventListener("click", (event) => {
  action("-");
});

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
let incrementButton = document.querySelector("button#increment");
incrementButton.addEventListener("click", (event) => {
  action("+");
});

/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
let autoDecrementButton = document.querySelector("button#auto_decrement");
function autoDecrement() {
  clearIncrement()
  auto = setInterval((event) => {
    action("-");
  }, 1000);
}
autoDecrementButton.addEventListener("click", autoDecrement);
/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
let autoIncrementButton = document.querySelector("button#auto_increment");
function autoIncrement() {
  clearIncrement()
  auto = setInterval((event) => {
    action("+");
  }, 1000);
}

autoIncrementButton.addEventListener("click", autoIncrement);
/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */
let stopButton = document.querySelector("button#stop_auto");
stopButton.addEventListener("click", clearIncrement);

function clearIncrement() {
  clearInterval(auto);
}

