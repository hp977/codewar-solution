// Question 
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"



// My answer
const removeConsecutiveDuplicates = s => {
    let arr = s.split(' ')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i+1]){
        newArr.push(arr[i])
      }
      }
   return newArr.join(' ');
    
 } 


// Other answer
const removeConsecutiveDupli = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");