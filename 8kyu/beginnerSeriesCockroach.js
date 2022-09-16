// Question
//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm 
// per second, rounded down to the integer (= floored).

// My answer
function cockroachSpeed(s) {
    return Math.floor(30/1.08*s);
  }

// Other answer
const cockroachSpeed = s => Math.floor(s / 0.036);
