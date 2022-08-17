//Build a function that returns an array of integers from n to 1 where n>0.


// MY answer
const reverseS = n => {
  let arr = [];

  while(n > 0) {
    arr.push(n);
    n--;
  }
  return arr;
};
// Other answer
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};