//Intermediate Algorithm Scripting: Missing letters
//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let arr = str.split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let alphIndex = alphabet.indexOf(arr[0]);
    alphabet = alphabet.join("").substr(alphIndex).split("")
    if(arr.join("") == alphabet.join("")) {
        return undefined;
      }
    for (let i in arr) {
      if(arr[i] !== alphabet[i]) {
        return alphabet[i];
      }
    }
  }
  
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("stvwx"));
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));