// Question
// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be 
// different if you are given 2 parameters instead of 1.
// My answer
function billboard(name, price = 30){
    return name.length/(1/price);
} 
// Other answer
function billboard(name, price = 30) {
  return name.split('').reduce((sum, letter) => sum + price, 0); 
}
// Other answer
function billboard(name, price = 30){

var totalCost = 0;
for(i=0; i<name.length; i++){
    totalCost += price;
} 

return totalCost;

}