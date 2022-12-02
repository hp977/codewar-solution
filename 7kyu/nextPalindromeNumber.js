// Question 
// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// Let's see:

// For Javascript
// nextPal(11) == 22

// nextPal(188) == 191

// nextPal(191) == 202

// nextPal(2541) == 2552
// You will be receiving values higher than 10, all valid.

// Enjoy it!!




// My answer
function nextPal(val) {
    for (let i = val+1; true; i++) {
      if (i == [...String(i)].reverse().join('')) {
        return i;
      }
    }
  }


// Other answer
function nextPal(val) {
    do {
      val++;
    } while(!isPalindrome(val))
    return val;
  }
  
  function isPalindrome(num) {
    return num === reverseNum(num);
  }
  
  function reverseNum(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  }