/*
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, 
and returns a new array. elem represents an element that may or may not be present on one or more 
of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version 
of the passed array such that any array nested within arr containing elem has been removed.
*/

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let j = 0; j < arr[i].length; j++) {
    if(arr[i][j] == elem) {
      elem_count++;
    }
    else if (j == arr[i].length && newArr.push(arr[i])) {
        newArr.push(arr[i]);
    }
    else {
      //newArr.push(arr[i]);
    }
  }
}
console.log(newArr);
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));