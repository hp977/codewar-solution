// Question
// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s


// My answer
function nerdify(txt){
    return txt.replace(/a/gi,4).replace(/e/gi,3).replace(/l/g,1);
  }

// Other answer
const n3rdify = t => t.replace(/[aelAE]/g, a => ({'a': 4, 'e': 3, 'l':1 }[a.toLowerCase()]));


// Some tests
console.log(nerdify('hello world')) // => h311o wor1d
console.log(n3rdify('hello universe')) // h311o univ3rs3