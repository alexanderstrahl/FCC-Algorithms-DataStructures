/*
Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
  let arr = str.split(" ");
  console.log(arr);
  let highest = 0;
  for(let i = 0; i < arr.length;i++) {
    if(highest < arr[i].length){
      highest = arr[i].length;
    }
  }
  console.log(highest);
  return highest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
