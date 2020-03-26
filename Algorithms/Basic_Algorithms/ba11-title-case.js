/*
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  let arr = str.split(" ");
  let arr_input = [];
  let superString = "";
  //let capitalize = str.toUpperCase();
  for(let i = 0; i < arr.length; i++) {
    //console.log(arr_input);
    for(let j = 0; j < arr[i].length; j++) {
      if(j == 0){
        arr_input.push(arr[i][0].toUpperCase());
        //console.log(arr_input[i]);
        superString.concat(arr[i] + " ");
      }
      if(j > 0) {
        //console.log("hmm",arr[i][j]);
        arr_input.push(arr[i][j].toLowerCase())
      }
      //console.log(arr_input);
      
    }
  }
  console.log(superString);
  arr_input = arr_input.join("");
  let new_string = "";
  for (let i = 0; i < arr_input.length; i++){
     if (arr_input.charCodeAt(i) >= 65 && arr_input.charCodeAt(i) <= 90 && i != 0) {
        new_string += " "; 
        new_string += arr_input[i]
     }
     else {
        new_string += arr_input[i]
     }
  }
  //arr_input = arr_input.replace(/[a-z][A-Z]/g, ' ')
  //arr_input = arr_input.split(/[a-z][A-Z]/)
  console.log(new_string);
  //console.log(arr_input); 
  return new_string;
}

titleCase("I'm a little tea pot");
