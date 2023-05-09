// Given a non-empty array containing only non-negative integers, return the list with trailing and leading zeroes removed.

// Example:



function removeZeroes(arr) {
    while( arr[0] == 0 || arr[arr.length-1] == 0) {
        if (arr[0] === 0) {
            arr.shift()
        }
        else if (arr[arr.length -1 ] === 0) {
            arr.pop()
        } 
} 
    return arr;
}



console.log(removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0]))
// > [3, 1, 4, 1, 5, 9]

console.log(removeZeroes([0, 0, 0]))
// > []

console.log(removeZeroes([8]))
// > [8]

