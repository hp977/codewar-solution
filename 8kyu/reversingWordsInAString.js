// Question 
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!


// My answer
function reverse(string){
    return string.split(' ').reverse().join(' ')
  }


// Other answer
function reverse(string){
    var original = string;
    var rev = original.split(' ').reverse().join(' ');
    return rev;
  }