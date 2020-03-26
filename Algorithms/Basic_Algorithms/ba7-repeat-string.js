/*Basic Algorithm Scripting: Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
    let repeat = "";
    for (let i = 0; i < num; i++) {
      repeat += str;
    }
    console.log(repeat);
    return repeat;
  }
  
  repeatStringNumTimes("abc", 3);
  