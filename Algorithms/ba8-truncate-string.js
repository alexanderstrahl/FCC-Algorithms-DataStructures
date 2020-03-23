/*
Basic Algorithm Scripting: Truncate a String
Truncate a string (first argument) if it is longer than the given maximum 
string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    let maxLength = str.length;
    if (num < maxLength) {
      let trancate = str.substring(0,num);
      trancate = trancate.concat("...");
      console.log(trancate);
      return trancate;
    }
    else {
      return str; 
    }
  }
  console.log(
  truncateString("A-tisket a-tasket A green and yellow basket", 8));