// Question 
// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// My answer
function getChar(c){
    return String.fromCharCode(c)
  }

// Other answer
function getChar(c){
  return String.fromCodePoint(c);
}

