// Question
// Complete the function/method so that it returns
//  the url with anything after the anchor (#) removed.

// My answer
function removeUrlAnchor(url){
    return url.split("#")[0]
  }
  
// Other answer
function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#.*/gi,"");
  }
