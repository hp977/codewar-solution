//Write a function which converts the input string to uppercase.


// My answer
function makeUpperCase(str) {
    return  str.toUpperCase()
     // Code here
   }

// Other Answers
function makeUpperCase(str) {
    return str.split('').map(el => el.toUpperCase()).join('')
    }