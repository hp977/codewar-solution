// Question
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// My answer
function getDivisorsCnt(n){
    let count = 0; 
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      count++
    }
} return count;
}

// Other answer
function getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }
  
  return d;
}
