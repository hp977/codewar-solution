// Question
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".
// My answer
function oddOrEven(array) {
    let sum = 0;
     array.forEach((i) => {
       sum +=i
     })
     return sum % 2 == 0 ? 'even' : 'odd';
  }

// Other answer
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}
