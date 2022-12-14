// Question 
// Write a function which calculates the average of the numbers in a given list. 
// Note: Empty arrays should return 0

// My answer
function findAverage (array) {
    if (array.length) {
      let sum = array.reduce((a,b) => a + b)
    return sum/array.length;
    }
    else {
      return 0
    }
  
  }


// Other answer
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }