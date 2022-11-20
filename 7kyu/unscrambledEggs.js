// Question 
// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.


// My answer
function unscrambleEggs(word){
    let regex = /egg/g
    return word.replace( regex, '')
  }


// Other answer
const unscrambleEggs = word => word.replace(/([^aeiou])egg/gi, '$1');