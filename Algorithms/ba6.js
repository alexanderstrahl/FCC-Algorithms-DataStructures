/*
Basic Algorithm Scripting: Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, 
which was introduced in ES2015. But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
    let target_len = target.length-1;
    let str_len = str.length-1;
    let end = str.substring(str_len-target_len,str_len+1);
    console.log(str_len-target_len,str_len,end)
    if (end == target) {
      console.log(true)
      return true;
    }
    else {
      return false;
    }
  }
  
  confirmEnding("Bastian", "n");
  