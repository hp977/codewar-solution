// In this kata you will create a function that takes a 
// list of non-negative integers and strings 
// and returns a new list with the strings filtered out

// My answer
function filter_list(l) {
    // Return a new array with the strings filtered out
  return l.filter(li => typeof(li) == "number")
    }

// Other answer
function filter_list(l) {
    var res = [];
                for(var item=0;item<l.length;item++)
                {
                    if (typeof l[item] === "number")
                    {
                        res.push(l[item]);
                    }
      
                }
                return res;
    }