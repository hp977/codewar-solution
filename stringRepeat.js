// Question

// Write a function that accepts an integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times.

// My answer
const repeatStr = (n, s) => s.repeat(n);


// Other answer
function repeatStr (n, s) {
var str="";
for(var i=0; i < n; i++)
  str+=s;
  return str;
}