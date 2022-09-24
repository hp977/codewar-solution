// Question
// In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

// nameThatNumber(4)   // returns "four"
// nameThatNumber(19)  // returns "nineteen"
// nameThatNumber(99)  // returns "ninety nine"
// Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!

// My answer
function nameThatNumber(num) {
    var numbers = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
  var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
  
    if (num < 20) {
      return numbers[num]
    }
    if (num < 100) {
      return tens[Math.floor(num/10)-2] + (num%10 ? ' ' + numbers[num%10]: '');
    }
  }

// Other answer
function nameThatNumber(num) {
  var n = num.toString().split('');
  var single = {0:'zero', 1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine',};
  var ten = {1:'ten', 2:'twenty', 3:'thirty', 4:'forty', 5:'fifty', 6:'sixty', 7:'seventy', 8:'eighty', 9:'ninety',};
  
  if (n.length === 1) return single[num]; 
  else if (num == 11) return 'eleven';
  else if (num == 12) return 'twelve';
  else if (num == 13) return 'thirteen';
  else if (num == 15) return 'fifteen';
  else if (num == 18) return 'eighteen';
  else if (n[1] == 0) return ten[n[0]];
  else if (n[0] == 1) return single[n[1]]+'teen';
  
  else return ten[n[0]]+ ' ' +single[n[1]];
}
