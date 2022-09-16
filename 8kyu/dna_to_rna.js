// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

// My answer
const DNAtoRNA = (dna) => dna.replace(/T/ig, 'U')


// Other answer
function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }