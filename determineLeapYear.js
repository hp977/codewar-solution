// Program to check if given year is a leap year

function leapYearChecker(year) {
    return year % 4 == 0 ? year + ' is a leap year': year + ' is not a leap year'; 
    // return year % 4 == 0; 
}

console.log(leapYearChecker(2020)); 
console.log(leapYearChecker(2014)); 