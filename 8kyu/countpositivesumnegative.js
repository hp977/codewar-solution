// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.


// My answer
function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
      return []
    } 
  
  let sum = 0;
  let positive = []
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      sum += input[i]
    }else if (input[i] > 0) {
      positive.push(input[i])
    }
    
    
  }return [positive.length, sum]
}

// Others answers
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}


function countPositivesSumNegatives(input) {
    return input && input.length ? input.reduce(function(p, c, i, s){
      c <= 0 ? p[1] += c : p[0] += 1;
      return p;
    }, [0, 0]) : [];
  }