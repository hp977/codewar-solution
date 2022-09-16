// Question
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// My answer
function squareDigits(num){
    let squareString = num.toString().split('').map(x => x*x).join('') ;
    return parseInt(squareString)
  }

// Other answer
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }
