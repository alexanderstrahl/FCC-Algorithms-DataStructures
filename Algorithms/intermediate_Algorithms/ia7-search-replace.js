//Intermediate Algorithm Scripting: Search and Replace

function myReplace(str, before, after) {
    if(before[0] == before[0].toUpperCase()){
      after = after[0].toUpperCase()+ after.substr(1)
    }
    str = str.split(before).join(after)
    return str;
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))