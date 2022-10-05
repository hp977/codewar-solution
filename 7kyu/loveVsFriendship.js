// Question
// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

// My answer
function wordsToMarks(string){
    let score = 0, index=0;
    for (j = 0; j < string.length; j++){
                   
                  score += string.charAt(j).charCodeAt(0) - ('a').charCodeAt(0) + 1;
                  }
    return score
  }

// Other answer
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

