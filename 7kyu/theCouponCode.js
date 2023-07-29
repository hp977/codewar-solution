// Write a function called checkCoupon which verifies that the coupon code is valid or not. 
// A coupon code is no more valid on the day AFTER the expiration date. All dates will be passed
// as strings in this format; 'MONTH DATE, YEAR'. 

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    let currentDateObj = new Date(currentDate); 
    let expirationDateObj = new Date(expirationDate);
    // The 'Date' object represents a specific point in the time and allows you to perform
    // various operations related to dates, time and time zones. 
    return enteredCode === correctCode && currentDateObj <= expirationDateObj; 
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")) //  ===  true
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")) //  ===  false


// Other solution

const checkCoupon = () =>  enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate); 
// Date.parse() method is used to parse a date string and convert into number of milliseconds since Jan 1, 1970,
// 00:00:00 UTC (also known as Unix timestamps). 