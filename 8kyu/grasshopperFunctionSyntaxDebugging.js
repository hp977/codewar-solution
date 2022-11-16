// Question 
// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.



// My answer
function main (verb, noun) {
    return verb + noun
  }


// Other answer
function main(verb, noun) {
  if(arguments.length > 1)
    return verb.trim() + ' ' + noun.trim();
}