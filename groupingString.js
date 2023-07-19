// Question
// Given a string, separate it into groups of non-space equal characters, sorted.


// Answer  generated from chatGPT

function explodeString(string) {
     string = string.split('').sort().join('')
    let charFrequencies = {}; 

    for (let character of string) {
        if (character !== " ") {
            charFrequencies[character] = (charFrequencies[character] || 0) + 1; 
        }
    }

    return charFrequencies; 

    const groups = []; 
    for (let character in charFrequencies) {
        const freqency = charFrequencies[character]
        if (!groups[freqency]) {
            groups[freqency] = [];
        }
        groups[freqency].push(character.repeat(freqency));
    } 
    // return groups.sort().flat(); 
    // groups.sort((a, b) => a[0].localeCompare(b[0]));

    return groups.flat(); 

}
console.log(explodeString('Ahh, abracadabra!'))
console.log(explodeString('\o/\o/')); 
// Example:

// > explodeString('Ahh, abracadabra!')
// > ['!',',','A','aaaaa','bb','c','d','hh','rr']

// > explodeString('\o/\o/')
// > ['//','\\','oo']
