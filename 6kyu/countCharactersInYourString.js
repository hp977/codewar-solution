// Question 
// The main idea is a count all the occuring characters in a string. If you have a string like aba, then 
// the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// My answer
function count(string) {
    let cache = {}
    string.split('').map(x => cache[x] = cache[x] + 1 || 1)
    return cache
}


// Other answer
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }