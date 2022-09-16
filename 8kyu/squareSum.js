// Question
//Complete the square sum function so that it squares each number
// passed into it and then sums the results together.
//


// MY answer
function squareSum(numbers){
  let sum = 0;
  numbers.forEach(number => {
    sum += number * number;
  })
  return sum;
}

// Other answer
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}