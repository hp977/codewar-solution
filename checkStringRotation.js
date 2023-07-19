// Check if two string are rotation of eachother 

function checkStrRotation(str1, str2) {
    return str1.split('').sort().join('').trim() == str2.split('').sort().join('').trim()
}


console.log(checkStrRotation('apple', 'pplea')); 
console.log(checkStrRotation('peterpan!', 'pan pet!er')); 