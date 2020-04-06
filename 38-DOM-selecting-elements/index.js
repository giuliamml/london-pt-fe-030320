/**
 * Exercise 1
 *
 * select p tags with getElementsByTagName and assign it
 * to variable {paragraphs}
 */
var paragraphs = document.getElementsByTagName("p");
/**
 * Exercise 2
 * select the first p tag with getElementsByTagName and assign it
 * to variable {firstParagraph}
 */
var firstParagraph = document.getElementsByTagName("p")[0];
/**
 * Exercise 3
 *
 * create a function {logAllParagraphs} and with forEach
 * to log each paragraph from {paragraphs}
 *
 * ATTENTION: check the type of {paragraphs} before doing forEach
 */

function logAllParagraphs(){
    let paragraphs = document.getElementsByTagName('p')
    let paragraphsArray = Array.from(paragraphs)
    paragraphsArray.forEach(element => console.log(element)) 
}

/**
 * Exercise 4
 *
 * select all elements with class "text" with getElementsByClassName
 * and assign it to variable {textElements}
 */
var textElements = document.getElementsByClassName('text');

/**
 * Exercise 5
 *
 * select all elements that have classes "text" and "green"
 * with getElementsByClassName and assign it to variable {greenText}
 */
var greenText = document.getElementsByClassName('text green')
/**
 * Exercise 6
 *
 * select element where id is 'textId-3'(use getElementById) and assign it
 * to variable {thirdText}
 */
var thirdText = document.getElementById('kitten');
/* ==================================================== */
/*                  querySelector section               */
/* ==================================================== */
// !!! For this section use querySelector or querySelectorAll only !!!

/**
 * Exercise 7
 *
 * select the fourth "li" element and save it to {fourthListElement} variable
 */
var fourthListElement = document.querySelectorAll('ul>li')[3];
/**
 * Exercise 8
 *
 * select all "li" elements and save it to {listElements} variable
 */
var listElements = document.querySelectorAll('li');
/**
 * Exercise 8
 *
 * select all "a" elements that are inside "ul" and assign it {listLinks}
 */
/**
 * Exercise 9
 *
 * select elements where the "data-community-name" attribute
 * is "codersinhoods" and assign it {communityElements}
 */
communityElements = document.querySelectorAll('[data-community-name=codersinhoods]');
/**
 * Exercise 10
 *
 * select all elements with class "test" and assign it to a variable
 * {elementsForTesting}
 */
var elementsForTesting = document.querySelectorAll('.test');
/**
 * Exercise 11
 *
 * select the element with id "test-5" and assign it to a variable
 * {fifthTest}
 */
var fifthTest = document.querySelector('#test-5');
/**
 * Exercise 12
 *
 * select all the elements which are siblings of an element
 * with the class "links" and assign it to a variable {nextElements}
 */
var nextElements = document.querySelectorAll('body:only-child');
