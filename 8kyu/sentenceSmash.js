// Question

// Write a function that takes an array of words and smashes them together into a
// sentence and return a sentence.

// My answer
const smash = words => words.join(' ') ;

// Other answer
function smash1 (words){
  return words.length != 0 ? words.reduce((res,v) =>  res+= ` ${v}`) : ''
};
function smash2 (words) {
  return words.join(' ')  
};
function smash(words){
  let result = '';
  for(let i = 0;i < words.length; i++){
    if(i == 0){//this is made so there is no space at start
      result = result + words[i]
    }else{
      result = result + ' ' + words[i]
    }
  }
  return result
};