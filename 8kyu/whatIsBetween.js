// Question
 
// Complete the function that takes two integers and return 
// an array of all integers between the input parameters

// My answer
function between(a, b) {
    let arr = []
    do {
      arr.push(a)
      a++
    } while (a <= b) 
      
    return arr;
  }
// Other answer
const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);
