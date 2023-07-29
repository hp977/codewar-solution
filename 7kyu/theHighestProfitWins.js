// Write a function that returns both the minimum and maximum number of a given list/array. 

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

// Examples 
console.log(minMax([1, 2, 3, 4, 5])); // --> [1, 5]
console.log(minMax([5, 234695664])); // -->  [5, 234695664]
console.log(minMax([1]));  // --> [1,1]
