// Question
// Given a string, you have to return a string in which each character
// (case-sensitive) is repeated once.
// My answer
const nameShuffler = (str) => str.split(' ').reverse().join(' ') ;

// Other answer
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}
