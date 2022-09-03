// Question
// Your task is to make a function that can take 
// any non-negative integer as an argument and 
// return it with its digits in descending order. Essentially, rearrange the
//  digits to create the highest possible number.
// My answer
function descendingOrder(n){
    return Number(n.toString().split('').sort().reverse().join(''))
  }

// Other answer
function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
  }
