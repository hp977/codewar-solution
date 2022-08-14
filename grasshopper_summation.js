// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.


// My answer
var summation = function (num) {
    let sum = 0;
   for (let i = 1; i <= num; i++) {
     sum += i;
   }
  return sum;
  }


// Other answer

const summation = n => n * (n + 1) / 2;


var summation = function f(num) {
    return num ? num + f(num-1) : 0;
  }


  const summation = num => (
    Array(num).fill(true)
      .reduce((sum, item, index) => sum + index + 1, 0)
  );