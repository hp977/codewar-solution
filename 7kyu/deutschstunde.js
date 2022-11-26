// Question 
// Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

// each noun containing less than 2 vowels has the article "das"
// each noun containing 2/3 vowels has the article "die"
// each noun containing more than 3 vowels has the article "der"
// Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

// (This Kata is a joke, there is no such grammar rule!)


// My answer
function derDieDas(wort){
    if (wort.match(/[aeiouäöü]/gi)) {
      if (wort.match(/[aioueäöü]/gi).length<2) return 'das '+wort;
   if (wort.match(/[aioueäöü]/gi).length>3) return 'der '+wort;
    return 'die '+wort;
    }
    return 'das '+wort
   }


// Other answer
function derDieDas(wort) {
  var n = wort.split(/[aeiouäöü]/i).length - 1
  if (n < 2) return "das " + wort
  if (n > 3) return "der " + wort
  return "die " + wort
}