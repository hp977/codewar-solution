// Question
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter
//  if it was in the past or it is in the future.

// My answer
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let yearsDiff = 2 * sonYearsOld;
    return yearsDiff > dadYearsOld ? yearsDiff - dadYearsOld : dadYearsOld - yearsDiff;
  }

// Other answer
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }
