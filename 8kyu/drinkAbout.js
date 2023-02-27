// Question
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.


// My answer
function peopleWithAgeDrink(old) {
    let drinkName
    if (old < 14) {
      drinkName = "toddy"
    } else if (old < 18) {
      drinkName = "coke"
    } else if (old < 21) {
      drinkName = "beer"
    } else {
      drinkName = "whisky"
    }
    return `drink ${drinkName}`
  };



  // Tests 

console.log(peopleWithAgeDrink(13))   // toddy
console.log(peopleWithAgeDrink(17))   // coke
console.log(peopleWithAgeDrink(18))   // beer
console.log(peopleWithAgeDrink(20))   // beer
console.log(peopleWithAgeDrink(30))   // whisky
