/*
Basic Algorithm Scripting: Chunky Monkey
Write a function that splits an array (first argument) into groups the 
length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
    let chunky = [];
    for (let i = 0; i < arr.length; i+=size) {
      chunky.push(arr.slice(i,i+size));
    }
    console.log(chunky);
    return chunky;
  }
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);