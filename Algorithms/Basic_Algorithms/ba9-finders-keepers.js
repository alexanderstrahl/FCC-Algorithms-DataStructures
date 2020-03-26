/*
Basic Algorithm Scripting: Finders Keepers
Create a function that looks through an array (first argument) 
and returns the first element in the array that passes a truth test (second argument). 
If no element passes the test, return undefined.
*/
function findElement(arr, func) {
    for (let num in arr) {
      if (func(arr[num])) {
        console.log("returned", arr[num])
        return arr[num];
      } 
      else if(arr.length-1 == num){
        console.log("returned", undefined)
        return undefined;
      }
    }
  }
  findElement([1, 1, 3, 5, 2, 10], num => num % 2 === 0);