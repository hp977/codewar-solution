// Return the first element in an array that pass the test

function findElement(arr, func) {
    return arr.find(func); 
}


// Examples 

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); 