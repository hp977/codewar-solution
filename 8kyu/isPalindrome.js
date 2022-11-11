// Question 
// Write a function that checks if a given string(case insensitive) is a palindrome. 


// My answer
function isPalindrome(x) {
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
}


// Other answer
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }
