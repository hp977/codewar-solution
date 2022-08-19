//Your task is to write a function that takes a string and return a new string with all vowels removed.


// MY ANSWER
function disemvowel(str) {
  let myRegex = /[aeiou]/gi;
  return str.replace(myRegex,'');
}
// 0THER ANSWER
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}