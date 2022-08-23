// Question
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string 
// on the outside and the longer string on the inside. The strings will not 
// be the same length, but they may be empty ( zero length ).

// My answer
const solution = (a, b) => a.length<b.length ? a+b+a : b+a+b;
// Other answer
const sol = ( i => () => [
  'abba',
  'baab',
] [i++] ) ( 0 ) ;
