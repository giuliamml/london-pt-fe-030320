// install and  import "readline-sync" npm package before you do exercises

var readlineSync = require("readline-sync");

const user = {};

let selectedItems = {
  book: "",
  movie: "",
  nextTrip: ""
};

const movies = [
  "The Invisible Man",
  "Never Rarely Sometimes Always",
  "Gretel & Hansel",
  "No time to die",
  "Bloodshot",
  "Onward",
  "Sonic"
];

const books = [
  "My Dark Vanessa",
  "Uncanny Valley",
  "Weather",
  "The night watchman",
  "All adults here",
  "Dear Edward",
  "Grown ups"
];

const countries = [
  "Italy",
  "France",
  "Germany",
  "Spain",
  "Portugal",
  "Denmark",
  "Netherland"
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
indexBooks = -1;

while (indexBooks === -1) {
  indexBooks = readlineSync.keyInSelect(books, "Which book?");
}
user.book = books[indexBooks];

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */
indexMovies = -1;

while (indexMovies === -1) {
  indexMovies = readlineSync.keyInSelect(movies, "Which movie?");
}
user.movie = movies[indexMovies];

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
indexCountries = -1;

while (indexCountries === -1) {
  indexCountries = readlineSync.keyInSelect(countries, "Which country?");
}
user.nextTrip = countries[indexCountries];

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

menu = ["books", "movies", "next destination"];

menuIndex = readlineSync.keyInSelect(menu, "Which category?");

while (menuIndex !== -1) {
  switch (menuIndex) {
    case 0:
      indexBooks = readlineSync.keyInSelect(books, "Which book?");

      break;
    case 1:
      indexMovies = readlineSync.keyInSelect(movies, "Which movie?");

      break;
    case 2:
      indexCountries = readlineSync.keyInSelect(countries, "Which country?");
  }

  menuIndex = readlineSync.keyInSelect(menu, "Which category?");
}

selectedItems.book = user.book = books[indexBooks];
selectedItems.movie = user.movie;
selectedItems.nextTrip = user.nextTrip;

console.log(selectedItems);
