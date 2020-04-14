/*
Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, 
    move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
function translatePigLatin(str) {
    let consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','z'];
    let vowell = ['a','e','i','o','u']
    //console.log("BCDFGHJKLMNPQRSTVXZ".toLowerCase().split(""))
    let arr = str.split("");
    let letter = arr[0];
    /*arr.map(item => {
      if(consonant.hasOwnProperty(item)){
        console.log("shheet")
      }
    })*/
      //(consonant.hasOwnProperty(item)) ? arr.push(letter)&&arr.shift()&&console.log("hehe"):item})
    if (arr[0] !== 'a'&&'e'&&'i'&&'o'&&'u') {
      letter = arr[0];
      arr.push(letter);
      arr.shift()
      arr.push("ay")
      str = arr.join("")
    }
    else if (arr[0] == 'a'||'e'||'i'||'o'||'u') {
      //letter = arr[0]; 
      //arr.push(letter);
      //arr.shift()
      arr.push("way")
      str = arr.join("")
    }
    console.log(str,arr, letter);
    return str;
  }
  
  console.log(translatePigLatin("aonsonant"));
  translatePigLatin("eight")