// Question
// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
// My answer
function evalObject(value){
    let result;
    switch(value.operation){
      case'+':
        result = value.a + value.b;
        break;
      case'-':
        result = value.a - value.b;
        break;
      case'/':
        result = value.a / value.b;
        break;
      case'*':
        result = value.a * value.b;
        break;
      case'%':
        result = value.a % value.b;
        break;
      case'^':
        result = Math.pow(value.a, value.b);
    }
    return result;
}

// Other answer
function evalObject(value){
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  }
}
