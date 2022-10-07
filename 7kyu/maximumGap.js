// Question
// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)


// My answer
function maxGap (numbers){
    let newArray = []
     numbers.sort((a,b) => a - b)
    for (let i = 0; i < numbers.length-1; i++) {
      newArray.push(numbers[i+1] - numbers[i])
    }
    return Math.max(...newArray)
  }

  
// Other answer
const maxGap = a => Math.max(...a.sort((x, y) => x - y).map((e, i, a) => i > 0 ? Math.abs(e - a[i - 1]) : 0));
