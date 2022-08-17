// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// My Answer
function makeNegative(num) {
    if (num > 0) {
      return -num;
    } else {
      return num;
    }
  }


  // Other Answer
  function makeNegative(num) {
  return -Math.abs(num);
}

//The Math. abs() function returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
