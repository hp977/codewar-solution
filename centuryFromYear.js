// Question

// Given a year, return the century it is in.

// My answer
const century = (year) => Math.ceil(year/100);

// Other answer
function century(year) {
  return (year + 99) / 100 | 0;
}