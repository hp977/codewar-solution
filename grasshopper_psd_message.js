// Questions

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.


// My answer
function greet (name, owner) {
  return name==owner?"Hello boss":"Hello guest"
}
// Other answer
function greet (name, owner) {
  return `Hello ${name==owner?'boss':'guest'}`
}