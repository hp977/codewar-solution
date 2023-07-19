// Program to find square root of a number


// Easy solution
function squareRoot(num) {
    return Math.sqrt(num)
}

// Other solution 

function sqrtNum(num) {
    for (let i = 0; i < num/2; i++) {
        if (i * i === num) {
            return i
        }
    }
}



console.log(squareRoot(9)); 
console.log(squareRoot(25)); 