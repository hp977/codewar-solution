// Question
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// My answer
const binaryArrayToNumber = arr => {
    let bin = Number(arr.join(''))
    return parseInt(bin, 2)
  };

// Other answer
const binArrayToNum = arr => parseInt(arr.join(''), 2);