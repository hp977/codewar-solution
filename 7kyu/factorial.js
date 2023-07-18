// Question 
// Write a function to calculate factorial for a given input. 
// If input is below 0 or above 12 throw an exception of type 
// ArgumentOutOfRangeException (C#) or IllegalArgumentException 
// (Java) or RangeException (PHP) or throw a RangeError
//  (JavaScript) or ValueError (Python) or return -1 (C).

// My answer
function factorial(n)
{ if (n < 0 || n > 12) throw new RangeError
return n>1?n*factorial(n-1):1;
}


// Other answer
function factorial(n){

    if (n < 0 || n > 12) {
       throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
     }
   return n<2 ? 1 : n*factorial(n-1);
   }


// Examples 
console.log(factorial(1))  // 1 
// console.log(factorial(14))  // throws new range error which affect execution of other examples
console.log(factorial(5))  // 120
console.log(factorial(3))  // 6
console.log(factorial(11))  // 39916800