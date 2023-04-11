// Question
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// My answer
function toCamelCase(str){
  // using replace() method to replace all occurances of hyphens or underscores followed
  // by a character with the uppercase version of that character.
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
  }

  // Tests
  console.log(toCamelCase("the-stealth-warrior"))     // "theStealthWarrior"
  console.log(toCamelCase("The_Stealth_Warrior"))     // "TheStealthWarrior"

  // Other answer
function toCamelCase(str){
  // defining a regualar expression pattern that matches any character 
  // immediately followed by hypen or underscore
    var regExp=/[-_]\w/ig;

    // using replace method on the input string to replace all occurrences of 
    // the pattern with the corresponding character converted to uppercase. 
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}

