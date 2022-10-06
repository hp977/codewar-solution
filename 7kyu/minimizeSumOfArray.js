// Question
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// My answer
function minSum(arr) {
    let sum = 0;
    arr.sort((a,b) => a-b)
   for (let i = 0; i < arr.length/2; i++) {
    sum += arr[i] * arr[arr.length-1-i]
   }
    return sum
  }

  
// Other answer
function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }
