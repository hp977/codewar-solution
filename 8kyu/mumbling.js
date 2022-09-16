// Question
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My answer
const accum =(s) => [...s].map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join("-");

// Other answer
function accum(s) {
    return [...s.toUpperCase()].reduce((acc, cur, index) => acc + "-" + cur + cur.toLowerCase().repeat(index))
  }
