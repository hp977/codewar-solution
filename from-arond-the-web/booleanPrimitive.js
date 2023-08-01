// Check if the value provided is boolean primitive 

function boolWho(bool) {
    return typeof(bool) === 'boolean'; 
}

function isBool(bool) {
    return bool === false || bool === true; 
}

console.log(isBool(false)); 
console.log(isBool([1])) ; 