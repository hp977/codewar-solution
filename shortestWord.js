// Question

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My answer
function findShort(s){
    let lengthArray = []
   s.split(' ').map(x => lengthArray.push(x.length))
    return Math.min.apply(null, lengthArray)
  }

// Other answer
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
