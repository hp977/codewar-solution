// Question
// Write a function that returns a string in which firstname is swapped with last name;

// My answer
const nameShuffler = (str) => str.split(' ').reverse().join(' ') ;
// Other answer
function nameSuffle(str){
  var arr = str.split(" ");
  return arr[1] + ' ' + arr[0]
}