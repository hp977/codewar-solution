// Question 

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24



// My answer
function grow(x){
    return x.reduce((x, y) => x*y)
}


// Other answer

const grow = (nums) => nums.reduce((product, num) => product * num, 1);