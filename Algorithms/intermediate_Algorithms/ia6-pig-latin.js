/*
Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, 
    move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
function translatePigLatin(str) {
  let pig = str;
  let reg = /[aeiou]/gi;
  if (str[0].match(reg)) {
    return pig += "way";
  }
  else if (str.match(reg)) {
    let start = str.indexOf(str.match(reg)[0]);
    return str.substr(start) + str.substr(0, start) + "ay";
  }
  else { 
    return pig += "ay";
    }
} 

console.log(translatePigLatin("aonsonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("glove"))