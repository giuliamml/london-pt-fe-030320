/**
 * Exercise 1
 *
 * create an object "user", which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
let user = {
    firstName : 'Giulia',
    lastName : 'Mummolo',
    age : 27

};
/**
 * Exercise 2
 *
 * create an object "allTypes" with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
let allTypes = {
    specie : 'cat',
    age : 3,
    likedFood : ['fish', 'meat'],
    likedToys : {
        type : 'mouse',
        colour : 'grey'
    },
    canJump : function(){
        return 'yes';
    },
    isHealthy : true

}
/**
 * Exercise 3
 *
 * create a function "createMovieObject" which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */
function createMovieObject(name, rating, ticketPrice){
     var movie = {
         name : name,
         rating : rating,
        ticketPrice : ticketPrice

        };
        return movie;
}

createMovieObject('titanic', 10, 10);
