// Question

// Complete the function which converts a binary number to a decimal number.

// My answer
const binToDec = (bin) => parseInt(bin, 2);

// Other answer
const binaryToDecimal = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);
