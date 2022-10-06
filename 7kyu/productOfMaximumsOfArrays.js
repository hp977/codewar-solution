// Question
// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)

// My answer
function maxProduct(numbers, size){
    let product = 1;
    numbers.sort((a,b) => a - b)
    for (let i = 1; i <= size; i++) {
      product *= numbers[numbers.length-i]
    }
    return product
  }


// Other answer
function maxProduct(numbers, size){
    return numbers.sort((a,b) => b-a).slice(0,size).reduce((acc,n) => acc*n);
  }
