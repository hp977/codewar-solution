// Question

// 
// Create a function that takes 2 integers in form of a string as an 
// input, and outputs the sum (also as a string):
Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// My answer
function sumStr(a,b) {
    return Number(a)+Number(b)+'';
  }

// Other answer
function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }
