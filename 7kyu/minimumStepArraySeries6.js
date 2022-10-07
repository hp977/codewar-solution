// Question 
// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// Notes:
// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.

// Input >> Output Examples
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)

// My answer
function minimumSteps(numbers, value){
    numbers.sort((a, b) => a - b)
      let sum = 0, i = 0
     while (value > sum) {
       sum += numbers[i]
       i++
     }
      return i - 1
    }

// Other answer
function minimumSteps(numbers, value){
    return numbers.sort((a,b)=>a-b).filter((e,i)=> (value=value-e) > 0).length;
 }
