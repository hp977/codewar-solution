// Question 
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"



// My answer
const greet = (name) => {
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return `Hello ${name}!`
}


// Other answer
var greeting = function(name) {
    return "Hello " + name.substring(0,1).toUpperCase() + name.slice(1).toLowerCase()+"!";
};


// Example
console.log(greet("riley"))  // "Hello Riley!"
console.log(greet("JACK")) // "Hello Jack"