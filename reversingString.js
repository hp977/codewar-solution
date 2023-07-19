// Reversing string 

function reverseString(string) {
   string = string.toString()
    return string.split('').reverse().join('');
}


console.log(reverseString('boss baby'));   // ybab ssob
console.log(reverseString(14)); 