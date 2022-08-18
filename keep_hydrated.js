// Questions
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// MY answer
function litres(time) {
  return Math.floor(time * 0.5);
}
// Other answer
litres = t => ~~(t / 2);
