// Question

//We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural
// should be used with that number or false if not. 

// My answer
const plural = (n) => n != 1;
// Other answer
function plural(n) {
    if (n >= 0){
      if (n == 1){
        return false;
      }else{
        return true;
      }
     }
}
