// Question 
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order.
// An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

// My answer
const inAscOrder = (arr) => {
    let sortedArr = [...arr].sort((a,b) => a - b); 
    return JSON.stringify(sortedArr) === JSON.stringify(arr)
   }

// Other answer
function inAscOrder(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false; 
    }
  }
  return true;
}

// Test
console.log(inAscOrder([1, 2, 4, 3, 5]))  // false
console.log(inAscOrder([-8, 3, 4, 5, 8]))   // true