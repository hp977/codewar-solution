// Question
// Convert number into reversed array of digits

// My answer
const digitize = (n) => String(n).split('').reverse().map(num => Number(num));

// Other answer
function digitize(n){
  return (n + '').split('').map(Number).reverse();
}
