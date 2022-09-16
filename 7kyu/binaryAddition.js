// Question 
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// My answer
function addBinary(a,b) {
    return (a + b).toString(2)
  }


// Other answer
function decimalToBinary(decimal){
  return (decimal >>> 0).toString(2);
}

function addBinary(a,b) {
  return decimalToBinary(a+b);
}