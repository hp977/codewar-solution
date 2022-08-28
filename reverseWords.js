// Question

// Complete the function that accepts a string parameter, and reverse each word in the string.
// All spaces in the string should be retained.

// My answer
const reverseWords = (str) => str.split(' ').map(x => x.split('').reverse().join('')).join(' ') ;

// Other answer
function reverseWords(str) {
  let reversedWord = '';
  let reversedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + ' ';
      reversedWord = '';
    }
  }
  return reversedStr + reversedWord;
}
