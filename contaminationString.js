// Question
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!
// My answer
function contamination(text, char){
    return text.replace(/./g, char)
  }
// Other answer
function contamination(text, char){
  return char.repeat(text.length)
}
