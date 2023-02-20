// Write a js program to generate greatest common divisor between two positive integer

// My solution
function mygcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return mygcd(b, a % b);
    }
  }


  // Other solution

  function mygcd(x,y){
    return y == 0 ? x : mygcd(y, x % y)
  }
  
  // Example usage
  console.log(mygcd(24, 36)); // Output: 12

