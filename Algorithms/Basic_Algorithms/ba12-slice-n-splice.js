/*
Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the 
first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/
function frankenSplice(arr1, arr2, n) {
    let sliceNsplice = []
    sliceNsplice = arr2.slice(0,n);
    for(let i in arr1){
      sliceNsplice.push(arr1[i]);
    }
    let tempArr = arr2.slice(n);
    for(let i in tempArr) {
      sliceNsplice.push(tempArr[i]);
    }
    console.log("sliceNsplice=",sliceNsplice);
    return sliceNsplice;
  }
   
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
      // Should return: [ 4, 1, 2, 3, 5, 6 ]
  frankenSplice([1, 2, 3], [4, 5], 1);
      // Should return: [ 4, 1, 2, 3, 5 ]
  frankenSplice([1, 2], ["a", "b"], 1);
      // Should return: [ 'a', 1, 2, 'b' ]
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
      // Should return: [ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]