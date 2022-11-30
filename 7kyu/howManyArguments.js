// Question 
// Create a function called args_count that returns the number
// of arguments provided

// My answer
function args_count(...args) {
    return [...args].length
  }

// Other answer
function args_count() {
    return arguments.length;
  }