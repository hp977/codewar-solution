// Question
// Find out "B"(Bug) in a lot of "A"(Apple).There will always be one bug in apple,
//  not need to consider the situation that without bug or
//   more than one bugs.input: string Array appleoutput:
//    Location of "B", [x,y]

// My answer
function sc(apple){
    for (let i = 0; i < apple.length; i++) {
      for (let j = 0; j < apple[i].length; j++) {
       if  (apple[i][j] === 'B')
         return [i, j]
      }
    }
  }
// Other answer
function sc(apple){
    var row = apple.findIndex(x => x.includes("B"));
    var col = apple[row].indexOf("B");
    return [row, col];
  }
