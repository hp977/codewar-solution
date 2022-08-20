// Question 
//You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the 
//animal is the right way round (head, body, tail).


// My answer
function fixTheMeerkat(arr) {
 return arr.reverse()
}


// Other answer
const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]
// Other answer

function fixTheMeerkat(arr) {
  return [arr[2], arr[1], arr[0]];
}