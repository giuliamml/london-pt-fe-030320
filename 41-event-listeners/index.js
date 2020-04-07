// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */
function clickTheButton() {
  button = document.querySelector("div.click>button");

  button.addEventListener("click", (event) => {
    console.log("This button has been clicked!");
  });
}
/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */

function hoverOver() {
  a = document.querySelector("div.mouseover>a");
  a.addEventListener("mouseover", (event) => {
    console.log("this link has been hovered");
  });
}
/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
function handleLeave() {
  el = document.querySelector("div.mouseover>a");
  el.addEventListener("mouseout", (event) => {
    console.log("this link has been hovered");
  });
}
/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */

function focusOnMe() {
  input = document.querySelector("div.input>input");
  input.addEventListener("focus", (event) => {
    console.log("input has been focused");
  });
}

/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */
function clickElsewhere() {
  input = document.querySelector("div.input>input");
  input.addEventListener("focus", (event) => event);
  input.addEventListener("blur", (event) => console.log("changed focus"));
}

/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */
function pressAKey() {
  input = document.querySelector("div.input > input");
  input.addEventListener("keydown", (event) => {
    console.log("Input has been focused on and a key has been pressed");
  });
}

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
function releaseAKey() {
  input = document.querySelector("div.input > input");
  input.addEventListener("keyup", (event) => {
    console.log("Input has been focused on and a key has been released");
  });
}
/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
function inputToUpperCase() {
  input = document.querySelector("div.input > input");
  input.addEventListener("keyup", (event) => {
    input.value = input.value.toUpperCase();
  });
}
/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
function handleSelectChange() {
  select = document.querySelector("select#items");

  select.addEventListener("change", (event) => console.log(event.target.value));
}

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 *
 *
 */

result = {
  firstName: "",
  lastName: "",
};
function submitFormHandler() {
  form = document.querySelector("form");
  inputFirstName = document.querySelector('input[name="firstName"]');
  inputLastName = document.querySelector('input[name="lastName"]');

  form.addEventListener("submit", (event) => {
    result.firstName = inputFirstName.value;
    result.lastName = inputLastName.value;
    console.log(result);
    event.preventDefault();
  });
}
/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */

function handleScroll() {
  window.addEventListener("scroll", (event) => {
    verticalScroll = window.scrollY;
    console.log(verticalScroll);
  });
}
