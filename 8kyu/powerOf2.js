// Question
//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 
//with the exponent ranging from 0 to n ( inclusive ).


// MY answer
function powersOfTwo(n){
  let arr = [];
  let i = 0;
  while (i <= n) {
    arr.push(2 ** i);
    i++;
  }
  return arr;
}
// Other answer
function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}
// Other answer

function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
  }