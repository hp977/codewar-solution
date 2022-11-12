// Question 
// Find the total sum of internal angles(in degrees) in an n-sided polygon. N will be greater than 2


// My answer
function angle(n) {
    return (n - 2) * 180
  }

// Other answer
let angle = n => n * 180 - 360;
