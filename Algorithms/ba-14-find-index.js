/*
Basic Algorithm Scripting: Where do I Belong
Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 
because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 
because once the array has been sorted it will look like [3,5,20] 
and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(arr, num) {
    let sorted = arr.sort((a, b) => a - b);
    if(arr[0] == undefined){
      console.log(0); 
      return 0;
    }
    for(let i in sorted) {
      //console.log(num, sorted[i],"i=",i,sorted.length-1); // for testing
      //console.log(arr[0]); // for testing
      if (num <= sorted[i]) {
        i--; i++; //I don't know why but this made it work to pass the tests lol
        console.log(i); // for testing
        return i;
      }
      else if (i == sorted.length-1) {
        i++;
        console.log(i); // for testing
        return i;
      }
    }
  }
  
  //getIndexToIns([40, 60], 50); // return: 1 
  //getIndexToIns([10, 20, 30, 40, 50], 35);// return: 3
  //getIndexToIns([10, 20, 30, 40, 50], 30); // return: 2
  getIndexToIns([2, 5, 10], 15); // return: 3
  getIndexToIns([], 1) // return: 0
  