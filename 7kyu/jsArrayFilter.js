// Question 
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]





// My answer

function getEvenNumbers(numbersArray) {
    return numbersArray.filter(x => x % 2 === 0);
}

// Test

console.log(getEvenNumbers([1, 2, 3, 4, 5])) // [2, 4]
console.log(getEvenNumbers([4 , 5, 7, 9, 10, 23, 44])) // [4, 10, 44]
console.log(getEvenNumbers([2,4,5,6])) // should == [2,4,6]