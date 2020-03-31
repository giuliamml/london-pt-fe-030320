// install and  import "readline-sync" npm package before you do exercises
var readlineSync = require('readline-sync');
const chalk = require('chalk');
var user = {

};
/**
 * Exercise 1
 *
 * ask user for a first name and save response to {user.firstName}
 */
user.firstName  = readlineSync.question('May I have your name? ');

/**
 * Exercise 2
 *
 * ask user for a last name and save response to {user.lastName}
 */

 user.lastName  = readlineSync.question('May I have your last name? ');
console.log(`Hello ${user.firstName} ${user.lastName}!`);

/*
 * Exercise 3
 *
 * ask user for a age and save response to {user.age}
 */
user.age  = readlineSync.question('May I have your age? ');
/*
 * Exercise 4
 *
 * ask user for a email and save response to {user.email}
 */
user.email  = readlineSync.question('May I have your email? ');
/**
 * OPTIONAL:
 *
 * use "chalk" to print out user data with colours :)
 */

console.log(
  'Here what we have, your full name is ' + (chalk.bgMagenta.cyan.bold(user.firstName + ' ' + user.lastName)) +
    '. You are ' + (chalk.bgWhite.black(user.age)) + ' and if we need to contact you we can send a letter to ' + (chalk.bgCyan.bold.magenta(user.email))
);
