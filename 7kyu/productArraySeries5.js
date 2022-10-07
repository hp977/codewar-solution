// Question 
// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// productArray ({12,20}) ==>  return {20,12}

// My answer
const productArray = (numbers) => numbers.map(element => numbers.reduce((acc, cur) => acc * cur)/element) ;

// Other answer
function productArray(numbers)
{
  var sum = numbers.reduce((x, y) => x * y);
  return numbers.map(x => sum / x);
}
