// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


// My answer 

function confirmEnding(str, target) {
    return str.slice(str.length-target.length) === target; 
    
    // return str.endsWith(target); 

}

console.log(confirmEnding("Bastian", "n"));   // true 
console.log(confirmEnding("Hello", "ol"));    // fasle


// Using test method

function confirmEnd(str, target) {
    return str.match(target); 
}

console.log(confirmEnd('Bastian', 'n')); 