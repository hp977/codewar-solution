// Question 
// Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi Hi"
// remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

// My answer
function removeLastExclamation(s) {
    return s.split(' ').map(x => x.replace(/!+$/gi, '')).join(' ')
} 


// Other answer
function remove(s){
    return s.replace(/\b!+/g, '');  
  }