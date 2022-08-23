// Question

// Create a function with two arguments that will return an array of the first(n) multiples of (x)

// My answer
function countBy(x, n) {
    var z = [];
    for (let i = 1; i <= n ; i++){
     z.push(x*i) 
    }
    
    return z;
  }

// Other answer
function countBy(x, n){
  return Array.apply(0, Array(n)).map(function(v, i){
    return (i + 1) * x;
  });
}