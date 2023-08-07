// Check if two string are rotation of eachother 

function checkStrRotation(str1, str2) {
    return str1.split('').sort().join('').trim() == str2.split('').sort().join('').trim()
}


// Other answer
function checkRotation(str1, str2) {
            // There lengths must be same and str2 must be
        // a substring of str1 concatenated with str1. 
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1);
}


console.log(checkRotation('apple', 'pplea')); 



console.log(checkStrRotation('apple', 'pplea')); 
console.log(checkStrRotation('peterpan!', 'pan pet!er')); 