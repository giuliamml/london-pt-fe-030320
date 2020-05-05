const form = document.querySelector("form");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve ./` to serve your index page

/**
 * Exercise 1
 *
 * create a function {getResponse} which takes
 * a URL as an argument and makes a GET request.
 * If the response {status} code is successful,
 * call a function which will render "Valid link! {Link}"
 * in {result} element, otherwise render
 * `Request failed with status code: {errorCode}`
 */
link = "http://localhost:5000";
const getResponse = () => {
  fetch(link)
    .then((response) => {
      if (response.status === 200) {
        console.log(`Valid link! ${link}`);
      } else {
        console.log(`Request failed with status code: ${response.status}`);
      }
    })
    .catch((e) => console.log(e));
};

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. provide URL in input and submit my request
 * 2. if provided URL is a valid API URL, then I should see
 * a message with a link.
 * 3. When I click on a link, it should be opened in a new tab
 * 4. if provided URL is invalid API URL, then I should see
 * an error message in {result} with status code.
 * 5. When I focus on input, it should clear my input and hide
 * {result}
 */


  form.addEventListener("submit", () => {
    let link = input.value;
    fetch(link)
      .then((response) => {
        if (response.status === 200) {
            a = document.createElement('a')
            a.href = link
            a.target = '_blank'
            a.innerHTML = 'Valid link!'
            result.append(a)
         
        } else if (response.status !== 200) {
          result.innerText = `Request failed with status code: ${response.status}`;
        }
      })
      .catch((e) => console.log(e));
  });


  input.addEventListener('focus', () =>{
      result.innerText = '';
      input.value = ''
  } )


