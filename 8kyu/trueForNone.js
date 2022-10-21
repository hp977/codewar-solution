// Question 
// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items
//  in the array. An empty list should return true.


// My answer
function none(arr, fun){
    return arr.filter(fun).length == 0 
  }


// Other answer
function none(arr, fun){
    return !arr.some(fun);
  }