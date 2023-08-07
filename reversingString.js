// Reversing string 

function reverseString(string) {
    string = '' + string;
    // string = string.toString();  
     return string.split('').reverse().join('');
}


console.log(reverseString('boss baby'));   // ybab ssob
console.log(reverseString(14));  // 41; 

// Other answer 

function reverseString1(string) {

    // Converting given input into string
    string = string.toString(); 
    
    // Initializing a variable store and return reversed letter of string 
    let reversedString = ''; 
    for (let i = string.length - 1 ; i >= 0; i--) {
        reversedString += string[i]; 
    }
    return reversedString; 
}

console.log(reverseString1('boss baby'));   // ybab ssob
console.log(reverseString1(14));  // 41; 