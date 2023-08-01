// Given two string s and t, return true if t is an anagram of s, and false otherwise


function isAnagram(s, t) {
return  s.split('').sort().join('') === t.split('').sort().join(''); 
}

console.log(isAnagram('race', 'care')); 