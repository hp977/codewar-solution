// Question

// Write a function feast that takes the animal's name and sish as arguments 
// and returns true or false to indicate whether the beast is allowed to bring
// the dish to the feast.
// There is just one rule: the diish must start and end with the same letter.

// My answer
function feast(beast, dish) {
    return beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length-1) == dish.charAt(dish.length-1)
  }
  
// Other answer
function feast(beast, dish) {
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
}
