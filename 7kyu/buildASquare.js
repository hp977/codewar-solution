// Question
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++


// My answer
function generateShape(integer){
    let symbol = '+'
    return (symbol.repeat(integer) + '\n').repeat(integer-1) + symbol.repeat(integer)
  }

// Other answer
function generateShape(n){
  return ("+".repeat(n)+"\n").repeat(n).trim()
}

// Example test
console.log('When n equals 2')
console.log(generateShape(2));
console.log('When n equals 3')
console.log(generateShape(3));
console.log('When n equals 4')
console.log(generateShape(4));