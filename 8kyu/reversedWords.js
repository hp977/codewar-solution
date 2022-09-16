// Question
// Complete the solution so that it reverses all of the words within the string passed in.
// My answer
function reverseWords(str){
    return str.split(' ').reverse().join(' ')
  }

// Other answer
const reverseWords = s => s
  .split` `
  .reverse()
  .join` `;
