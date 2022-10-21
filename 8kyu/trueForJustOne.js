// Question 
// Create a function called one that accepts two params:

// a sequence
// a function
// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.


// My answer
function one(arr, fun){
    return arr.filter(fun).length == 1
  }

// Other answer
function one(arr, fun){
    let qtyTrue = 0, i = 0;
    
    // if qtyTrue is >= two, for loop stop and don't run anymore
    while (qtyTrue < 2 && i < arr.length) {
      if (fun(arr[i])) {
        qtyTrue += 1;
      }
      i += 1;
    }
      
    return qtyTrue === 1;
  }