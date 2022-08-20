// Question
// Create a function that checks if a number n is divisible by two numbers x AND y.



// My answer

function isDivisible(n, x, y) {
    return (n%x == 0 && n%y == 0)
  }

// Other answer
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}



