// Question

// Simple remove the spaces from the string, then return the resultant string.


// My answer
const noSpace = (x) => x.replace(/\s+/g, '') ;

// \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).

// In the first regex, each space character is being replaced, character by character, with the empty string.

// In the second regex, each contiguous string of space characters is being replaced with the empty string because of the +.
// Other answer



// Other answer
function noSpace(x){return x.split(' ').join('')}