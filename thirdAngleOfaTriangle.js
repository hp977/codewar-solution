// Question

// You are given two interior angle of a triangle write a function to to return the 3rd.

// My answer
const otherAngle = (a, b) =>  180-a-b;

// Other answer
function otherAngle(a, b) {
  var c = a + b;
  var z = 180 - c;
  
  return z;
}