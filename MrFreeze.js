// Question
//  There is an object/class already created called MyFreeze.
// Mark this object as frozen so that no other changes can be made to it.

// My answer
Object.freeze(MrFreeze);

// Other answer
function deepFreeze (o) {
  var prop, propKey;
  
  Object.freeze( o );
  for ( propKey in o ) {
    prop = o[ propKey ];
    
    if ( !o.hasOwnProperty( propKey ) || !(typeof prop === "object") || Object.isFrozen( prop ) ) {
      continue;
    }

    deepFreeze(prop);
  }
}

deepFreeze(MrFreeze);
