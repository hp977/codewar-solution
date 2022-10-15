// Question
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.


// My answer
function take(arr, n) {
  return arr.slice(0, n);
}

// Other answer

const take = (arr, n) => arr.filter((a, index) => index < n);