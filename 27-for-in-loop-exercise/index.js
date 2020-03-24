/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */
function logProperties(obj){
    for (const propertyName in obj){
        console.log(`Property name: ${propertyName}`)
    }
}
//logProperties({"a": 123})


/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */
function getAllValues(obj){
    var array = [];
    for (const key in obj){
        array.push(obj[key])
    }

    return array;
}
//getAllValues();
/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
function getAllValuesAsString(obj){
    var string = '';
    for (const key in obj){
        if ( string == '' ){
            string = obj[key]
        } else {
            string = `${string} ${obj[key]}`;
        }
        
    }
    return string;
}
console.log(getAllValuesAsString({
    firstName: "Alex",
    lastName: "Smith",
    age: 25
}));
/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */
function propertyValueString(obj){
    for (const key in obj){
        console.log(`${key}: ${obj[key]}`)
    }
}
propertyValueString();