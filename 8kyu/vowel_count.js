// Question 
//Return the number (count) of vowels in the given string.


// MY Answer
function getCount(str) {
    let vowel = str.match(/[aeiou]/gi);
   if (vowel) {
     return vowel.length;
   } else {
     return 0;
   }
}

// Other Answer
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}