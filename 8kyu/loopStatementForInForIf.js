// Question
// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.

// My answer
function giveMeFive(obj){
    let myArr = []
    for (var key in obj) {
      if (key.length == 5) {
        myArr.push(key)
      }
      if (obj[key].length == 5) {
        myArr.push(obj[key])
      }
    }
    return myArr;
  }

// Other answer
function giveMeFive(obj) {
  const fives = []
  
  for (key in obj) {
    if (obj.hasOwnProperty(key)) { // always use this with for..in loops for objects !
      if (key.length === 5) fives.push(key)
      if (obj[key].length === 5) fives.push(obj[key])
    }
  }
  
  return fives
}
