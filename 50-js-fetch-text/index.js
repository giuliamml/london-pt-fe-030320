const form = document.querySelector("form");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// url for testing: http://numbersapi.com/random

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {getResponse} which takes
 * URL as an argument and sends a GET request.
 * When you receive a response, render the
 * string in {.result} element
 */

const getResponse = () => {
  fetch("http://numbersapi.com/random")
    .then((response) => {
      return response.text();
    })
    .then((data) => (result.innerHTML = data));
};
/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. provide a URL in the input field and submit it
 * 2. see the body of the response in {.result} element
 * 3. focus on input, clearing my previous input and hiding {.result} element
 */

form.addEventListener("submit", () => {
  let link = input.value;
  fetch(link)
    .then((response) => {
      return response.text();
    })
    .then((data) => (result.innerText = data));
});

input.addEventListener("focus", () => {
  result.innerText = "";
  input.value = "";
});
