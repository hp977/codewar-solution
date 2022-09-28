// Question
// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

// My answer
sortme = function( names ){
    return names.sort()
  }

// Other answer
sortme = function( names ){
    return names.sort(function(a, b) { return a > b ? 1 : a < b ? -1 : 0 });
  }
