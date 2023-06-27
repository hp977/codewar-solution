
// Write a function that takes an array of consecutive, increasing letters as input, 
// and returns any missing letters in the array between the first and last letter. 

function findMissingLetters(letters) {
    const first = letters[0].charCodeAt(0); 
    // letters.charCodeAt(0) retrieve the Unicode value(character code) of the charatcte at a specified index
    // within a string. The '0' inside the parenthesis represents the index fo the charater for which you want
    // to retrieve the Unicode value. 
    const last = letters[letters.length-1].charCodeAt(0); 
    const missingLetters = []; 

    for (let i = first; i < last; i++) {
        const currentLetter = String.fromCharCode(i); 
        if(!letters.includes(currentLetter)) {
            missingLetters.push(currentLetter); 
        }
    }
    return missingLetters; 
}

// Example usage; 
console.log(findMissingLetters(['a', 'b', 'd', 'f']));  // ['c', 'e']

