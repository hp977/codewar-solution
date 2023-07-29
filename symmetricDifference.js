// Create a  function that takes two or more arrays and returns an array of their symmetric 
// difference. The returned arrray must contain only unique values(no duplicates).

function sym() {
    const args = []; 
    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]); 
    }
    function symDiff(arr1, arr2) {
        const result = []; 

        arr1.forEach(function(item) {
            if (arr2.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item); 
            }
        })
        arr2.forEach(function(item) {
            if (arr1.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item)
            }
        }); 
        return result; 
    }

    return [... new Set (args.reduce(symDiff))]; 
}



console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));   // should return [3, 4, 5])

// Test cases
const A = [1, 2, 3];
const B = [2, 3, 4];
const C = [2, 3];
const D = [1, 2, 4, 5];
const E = [3, 5, 6];

console.log(sym(A, B)); // Output: [1, 4]
console.log(sym(A, B, C)); // Output: [1, 4]
console.log(sym(A, C, D, E)); // Output: [4, 6]


// the wrong result is given by this, need to correct it. 