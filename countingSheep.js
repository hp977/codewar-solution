// Question
//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of 
//sheep present in the array (true means present).


// MY answer
function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(sheep => {
     if (sheep == true) {
       count++
     }
    })
    return count;
  }

// Other answer

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }