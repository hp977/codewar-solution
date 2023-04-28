const originalString = `
so let's get into the basics before we
0:05
zoom back out how do you build the computer from scratch what is a microprocessor what is it microarchitecture what's an instruction set architecture maybe even as far back as what is a transistor so
the special charm of computer engineering is there's a relatively good
understanding of abstraction layers so down to bottom you have atoms and atoms get put together in materials like silicon or dope silicon or metal and we build transistors on top of that we
build logic gates right and in
functional units like an adder or`
const cleanedString = originalString.replace(/[0-9:]/g, '');

console.log(cleanedString); // Output: "Hello World"