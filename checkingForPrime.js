function checkPrime(num) {
    // Calculate the square root of a given number and round it up
    let sqrtNum = Math.floor(Math.sqrt(num)); 

    // Iterate through possible divisors from 2 up to the square root of a number
    for (let i = 2; i <= sqrtNum; i++) {
        // If the number is divisible evenly by the current divisor, it's not a prime number 
        if (num % i === 0) {
            return num + ' is not prime number.'
        }
    }
    return  num + ' is a prime number.'
}

// Any non-prime number will have at least one divisor less than or equal to it's square root. 
// If such divisor is found, the function concludes that the number is not prime. 

console.log(checkPrime(1));
console.log(checkPrime(9));
console.log(checkPrime(25));
console.log(checkPrime(11));


function generatePrime(num) {
    let primeArr = []; 

    for (let i = 1; i < num; i++) {
        if (isPrime(i)) {
            primeArr.push(i)
        }
        }


        function isPrime(number) {
            let sqrtNumber = Math.floor(Math.sqrt(number))
            
            if (number <= 0) {
                return false
            }
            else if (num > 0) {
                for (let i = 2; i <= sqrtNumber; i++) {
                    if (number % i === 0) {
                        return false; 
                    }
                }
            }
            return true; 

        }
            
        
return primeArr; 
}

console.log(generatePrime(100)); 