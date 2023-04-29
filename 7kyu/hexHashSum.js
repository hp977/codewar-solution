// Question
// Complete the function that accepts a valid string and returns an integer.

// Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).


// My answer
function hexHash(code){
    return [...[...code].map(a => a.charCodeAt().toString(16).replace(/[^0-9]/, '')).join``].reduce((a,b) => a + b * 1, 0)
   }
   // b * 1 is equal to Number(b)
   // charCodeAt() is a string method that is used to retrieve a Unicode value for a character at a specific position in a string.
   
// Other answer
const hashHex = (str) => 
    str.length === 0 ? 0 : str.replace( /./g, x=> (x.codePointAt()).toString(16) ).match(/\d/g).reduce((a,b)=> +a + +b,0)


// Examples
console.log(hexHash('Yo'))   // 5 + 9 + 6 = 20
console.log(hexHash("Hello, World!")) //    91
console.log(hexHash("Forty4Three"))   //   113