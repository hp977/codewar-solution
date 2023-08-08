// Given two string s and t, return true if t is an anagram of s, and false otherwise


function isAnagram(s, t) {
return  s.split('').sort().join('') === t.split('').sort().join(''); 
}

console.log(isAnagram1('race', 'care')); 

function isAnagram1(s, t) {
    return s.split('').reverse().join('') // === t; 
}