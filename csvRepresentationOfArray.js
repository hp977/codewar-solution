// Question 
// Create a function that returns the CSV representation of a two-dimensional numeric array


// My answer
function toCsvText(array) {
    return array.join('\n')
 }

// Other answer
const toCsvText = array => array.map(row => row.join(',')).join('\n');