// Question 
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


// My answer
function last(x){
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length - 1))
  }
  
// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending,
//  built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// Other answer
const last = ( $ ) => $.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1))