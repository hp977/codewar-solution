// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// My answer
function abbrevName(name){
    name = name.toUpperCase()
    let index = name.indexOf(" ")
    return name.charAt(0) + '.' + name.charAt(index+1)
      // code away
  
  }
// Others answer

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

  function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }