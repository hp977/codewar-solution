// Find the sum of all the multiples of 3 or 5 below the provided paramater value number. 

function multiplesOf3and5(number) {
    let multiples = []; 
    for (let i = 1; i < number; i++ ) {
      if (i % 3 == 0 || i % 5 == 0) {
        multiples.push(i)
      }
    }
    return multiples.reduce((x, y) => x + y, 0);
  }
  
  console.log(multiplesOf3and5(1000));