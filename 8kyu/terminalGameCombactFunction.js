// Question
// function combat(health, damage) {
//     let newHealth = health - damage
//     return newHealth < 0? 0 : newHealth;
//   }

// My answer
function combat(health, damage) {
    let newHealth = health - damage
    return newHealth < 0? 0 : newHealth;
  }

// Other answer
function combat(health, damage) {
  return health < damage ? 0 : health - damage
}
