// Question
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)



// My answer
function squareArea(A) {
    let a = A / (2 * Math.PI * (90 / 360));
    let area = Math.pow(a, 2);
    return Number(area.toFixed(2));
  }

// Other answer
squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);
