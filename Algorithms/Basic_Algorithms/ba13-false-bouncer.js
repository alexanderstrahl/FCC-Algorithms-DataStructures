/*
Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
    let new_arr = [];
    for(let i in arr) {
      if(arr[i]) {
        new_arr.push(arr[i]);
      } 
    }
    console.log(new_arr);
    return new_arr;
  }
  
  bouncer([7, "ate", "", false, 9]);
  //Should return [ 7, 'ate', 9 ]