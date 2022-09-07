// Question

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
// My answer
function nbDig(n, d) {
    let res = 0; 
    for (let i = 0; i <= n; i++) {
      let square = (i * i + "").split("");
      square.forEach(x => x == d ? res++ : null)
    } return res;
  }

// Other answer
function nbDig(n, d) {
    var o = '';
      for(var i = 0; i <= n; i++){
        o += Math.pow(i, 2);
      }
    return o.split(d).length-1
  }
