// Question
// Create a method to see whether the string is ALL CAPS.



// My answer
String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
  }


// Other Answer
String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};


