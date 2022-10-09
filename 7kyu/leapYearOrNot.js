// Question
// Given the duration of the planet's orbit (in days) and a specific year on this planet,
//  determine if the given year is a leap year here.

// My answer
function isLeapYear(duration, year) {
    return year % (1/( duration - Math.floor(duration))) == 0
  }

// Other answer
function isLeapYear(duration, year) {
  return duration * year % 1 === 0;
}
