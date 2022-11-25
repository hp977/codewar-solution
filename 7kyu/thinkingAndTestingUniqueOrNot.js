// Question 
// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

// For testing
// https://www.codewars.com/kata/56d949281b5fdc7666000004/train/javascript

// My answer
function testit(a,b){
    let uniqueA = [...new Set(a)]
    let uniqueB = [...new Set(b)]
    return uniqueA.concat(...uniqueB).sort((a,b) => a - b)
 }


// Other answer
function testit(a,b){
	return [...new Set(a), ...new Set(b)].sort((a, b) => a - b)
}