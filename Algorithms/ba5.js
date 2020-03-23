/*Basic Algorithm Scripting: Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
*/
function largestOfFour(arr) {
    let high_arr = [];
    for (let i = 0; i < arr.length; i++) {
      let highest = arr[i][0];
      console.log(high_arr);
      for (let j = 0; j < arr[i].length; j++) {
        if (highest < arr[i][j]) {
          highest = arr[i][j];
        }
        if (j == arr[i].length-1) {
          high_arr.push(highest);
          //console.log(high_arr);
          highest = arr[i][0];
        } 
      } 
    }
    return high_arr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  