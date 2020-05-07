const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */

const fetchData = async (URL) => {
  const response = await fetch(URL).then((data) => data.json());

  return response.all;
};

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */

const displayRandomFact = (facts) => {
  facts.forEach((randomFact) => {
    let factCreatorName = randomFact.user
      ? `${randomFact.user.name.first}${randomFact.user.name.last}`
      : " ";
    let li = document.createElement("li");
    li.innerHTML = `
	<p class="fact">${randomFact.text}</p>
	<p class="author">${factCreatorName}</p>`;
    result.append(li);
  });
};

button.addEventListener("click", async () => {
  const allFacts = await fetchData("https://cat-fact.herokuapp.com/facts");

  factsArray = [];
  for (let i = 1; i < 3; i++) {
    factsArray.push(allFacts[getRandomFact(allFacts.length)]);
  }

  displayRandomFact(factsArray);
});

const getRandomFact = (fact) => {
  return Math.floor(Math.random() * fact);
};
