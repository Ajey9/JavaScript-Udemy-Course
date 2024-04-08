function word(string) {
  return string.replace(/  /g, " ");
}

// function uppercaseFirstWord(func) {
//   console.log(`${func}`);
//   const [firstWord, ...otherWords] = func.split(" ");
//   console.log(firstWord + " \t" + otherWords);
//   const finalWord = `Mr.` + [firstWord.toUpperCase(), ...otherWords].join(" ");
//   console.log(finalWord);
//   console.log(func.name); //This returns function name as "undefined"
// }

// function uppercaseFirstWord(string, func) {
//   const [firstWord, ...otherWords] = string.split(" ");
//   console.log(firstWord + " \t" + otherWords);
//   const finalWord = `Mr.` + [firstWord.toUpperCase(), ...otherWords].join(" ");
//   console.log(func.name); //This returns the function name "word"
// }

uppercaseFirstWord("Ajay  Deepak  Gathadi", word);
