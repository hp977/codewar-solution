// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My answer
function simpleMultiplication(number){
  if(number % 2 == 0){
    return number * 8;
  }
  else{
    return number * 9;
  }
}

// Other Answer
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

// Other Answer
function simpleMultiplication(number){
    return (number % 2 == 0)? number * 8 : number * 9;
}