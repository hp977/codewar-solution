// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


// My answer 
let countSheep = function (num){
    //your code here
    if (num == 0) {
      return ''
    }
    let str = '';
    for (let i = 1; i <= num; i++) {
      str += `${i} sheep...`
    } return str;
  }
// Other answer 

let cSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}
// Other answer 
const Sheep = num => {
  let val = '';
  for (let i = 1; i <= num; i++) {
    val += `${i} sheep...`;
  }
  return val;
}