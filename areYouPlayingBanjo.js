// Question 
// Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
//


// My answer
function areYouPlayingBanjo(name) {
    if (name.charAt(0).match(/r/i)) {
      return name + ' plays banjo'
    } else {
      return name + ' does not play banjo'
    }
  }


// Other answer
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }
