// Question
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// My answer
function smallEnough(a, limit){
    return Math.max(...a) <= limit
}

// Other answer
smallEnough = (a, l) => a.every(e => e <= l)
