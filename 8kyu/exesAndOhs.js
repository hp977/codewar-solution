// Question

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

// My answer
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
}


// Other answer
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }