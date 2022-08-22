// Question

//Write function RemoveExclamationMarks which 
//removes all exclamation marks from a given string.



// My answer
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

// Other answer
function removeExclamationMarks(s) {
  return s.split('!').join('');
}
