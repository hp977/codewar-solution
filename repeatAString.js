// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number.
//  For the purpose of this challenge, do not use the built-in .repeat() method.


// Answer
function repeatStringNumTimes(str, num) {
    let repeatedStr = ''; 
    for (let i = 0; i < num; i++) {
        repeatedStr += str; 
    }
    return repeatedStr; 

    // return str.repeat(num)
}

console.log(repeatStringNumTimes('abc', 3));   // abcabcabc
console.log(repeatStringNumTimes("*", 8));    // ********