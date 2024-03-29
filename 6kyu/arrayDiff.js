// Question
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


// My answer
function arrayDiff(a, b) {
    let result = [];
    for(let i = 0; i < a.length; i++){
      result.push(a[i]);
      for(let j = 0; j < b.length; j++){
        if(a[i] === b[j]){
          result.pop();
        }
      }
    }
    return result;
}

// Test for my solution 
console.log(arrayDiff([1,2],[1]))    //  [2]
console.log(arrayDiff([1,2,2,2,3],[2]))  //  [1,3]


// Other answer
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

// Test for other solution 
  console.log(array_diff([1,2],[1]))    //  [2]
 console.log(array_diff([1,2,2,2,3],[2]))  //  [1,3]
