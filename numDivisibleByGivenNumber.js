// Question
// Write a function which gives list of function which are
// divisible by given number

// My answer
const divisibleBy = (numbers, divisor) => numbers.filter(num => num%divisor ==0);

// Other answer
function divisibleBy(numbers, divisor){
let answer = []
 numbers.map(x => {
 if(x % divisor === 0){
   answer.push(x)}
 } )
 return answer
}