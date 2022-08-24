// Question

// Write a function to sort given list of string alphabetically and return 
// first value to have '***' between each of its letters.


// My answer
const twoSort = (s) => s.sort()[0].split('').join('***');

// Other answer
const starSort = s => [...s.sort()[0]].join('***');
