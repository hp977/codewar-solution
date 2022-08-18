// Question
// Two bullets is required to kill a dragon, check if bullets 
// are enough to kill all the dragons.

// My answer
function hero(bullets, dragons){
    return bullets / dragons >= 2 ;
}


// Other answer
function hero(bullets, dragons){
  return bullets >= dragons * 2
}