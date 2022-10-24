// Question 
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string



// My answer
function reverseLetter(str) {
    str = str.match(/[A-Za-z]/g)
     return str.reverse().join('')
  }


// Other answer
reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');
