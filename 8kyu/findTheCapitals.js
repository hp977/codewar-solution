// Question
// Write a function that takes a single string (word) as argument.
//  The function must return an ordered list containing the indexes of all capital letters in the string.

// My answer
let capitals = function (word) {
	return word.split('').filter(x => x == x.toUpperCase()).map(a => word.indexOf(a))
};

// Other answer
var findCapitals = function (word) {
  var caps = [];
  for(var i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};