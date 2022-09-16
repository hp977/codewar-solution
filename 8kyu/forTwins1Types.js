// Question

// Write a function that will accept two parameters:
//  variable and type and check if type of variable is matching type.
//  Return true if types match or false if not.


// My answer
function typeValidation(variable, type) {
    return typeof(variable) == type;
  }

// Other answer
typeValidation=(v,t)=>typeof v===t
