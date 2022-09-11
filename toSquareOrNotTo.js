// Question
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// My answer
const squareOrSquareRoot = (array) => array.map(x => Math.sqrt(x) % 1 == 0 ? Math.sqrt(x) : x*x) ;

// Other answer
function squareOrSquareRoot(array) {
    return array.map(x => {
      const r = Math.sqrt(x);
      return (r % 1 == 0) ? r : (x*x);
    });  
  }