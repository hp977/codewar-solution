// Sum the odd-square numbers less than a given integer n.


function oddSquareSum(n) {
    let sum = 0; 
    for (let i = 1; i * i < n; i+=2) {
        if (i * i % 2 === 0) {
            sum += i * i
        }
    }
    return sum; 
}

console.log(oddSquareSum(1)); // 0
console.log(oddSquareSum(2)); // 1
console.log(oddSquareSum(9)); // 1
console.log(oddSquareSum(10)); // 10
console.log(oddSquareSum(44)); // 35


