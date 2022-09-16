// Question

// You are given the length and width of a 4-sided polygon. The 
// polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// My answer
const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : 2*(l + w) ;
  };
  
// Other answer
const areaOrPerim = function(l , w) {
  let area = l * w;
  let perimeter = (l + w) * 2;
  
  return l === w ? area : perimeter;
};

