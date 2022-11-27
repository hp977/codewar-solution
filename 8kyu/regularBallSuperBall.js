// Question 
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"


// My answer
var Ball = function(ballType) {
    this.ballType = ballType || 'regular'
};

// Other answer
class Ball {
    constructor(ballType = "regular") {
      this.ballType = ballType;
    }
  }