// Question

//Write a function findNeedle() that takes an array full of junk but containing one "needle"


// My answer
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
  }

// Other answer
function findNeedle(haystack) {
  var i = 0;
  while (i < haystack.length) {
    if (haystack[i] == 'needle') {
      return 'found the needle at position ' + i;
    }
    i++;  
  }
}
