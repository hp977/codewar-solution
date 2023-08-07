// Program to check if given year is a leap year



 
function leapYearChecker(year) {
    if (year % 100 !== 0) {
        if (year % 4 === 0) {
            return year + ' is a leap year'; 
        }
    }
    else {
        if (year % 400 === 0) {
            return year + ' is a leap year'; 
        }
    }
    return year + ' is not a leap year'; 

}




// function leapYearChecker(year) {
//     return year % 4 == 0 ? year + ' is a leap year': year + ' is not a leap year'; 
//     // return year % 4 == 0; 
// }

console.log(leapYearChecker(2020)); 
console.log(leapYearChecker(2014)); 
console.log(leapYearChecker(3000)); 