// Question
// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15
// TIPS:
// ruby/python : http://lmgtfy.com/?q=Ruby+splat+operator

// JS/Coffeescript : http://lmgtfy.com/?q=Javascript+arguments+variable

// C: https://www.geeksforgeeks.org/variadic-functions-in-c/
// My answer
function sum(...input) {
    // In some programming languages (including c++ and js), the comma operator stands for 
    //"Evaluate all the expressions separated by commas and return the last one"
    return input.reduce((a, b) => a + b)
  }

// Other answer
function sum() {
    var total = 0;
    for(var i in arguments){
      total += arguments[i];
    }
    return total;
  }