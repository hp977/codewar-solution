// Write function called sortGiftCode that accepts a string collection up to 26 unique 
// alphabatical characters, and return the string containing same characters in alphabatical order. 

// One answer 
const sortGiftCode = (code) => code.split('').sort().join(''); 



// Other answer 

const sort_gift_code = (code) => [...code].sort().join(''); 

// Examples (Input -- => Output); 

console.log(sortGiftCode('akjsoitihd'));  // adhiijkost
console.log(sortGiftCode('ldkjdkdj'));   // ddjjkkl
console.log(sortGiftCode('kjljdkidiwe'));   // ddeiijjkklw 

// Example of sort_gift_code
console.log(sort_gift_code('akdkjeiek')); 