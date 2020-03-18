/*
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, 
and returns a new array. elem represents an element that may or may not be present on one or more 
of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version 
of the passed array such that any array nested within arr containing elem has been removed.
*/

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  var elem_count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      //console.log("j:",j, "len:",arr[i].length-1, "arr",arr[i][j], "elem:", elem, "elem_count",elem_count );
      if(arr[i][j] === elem) {
        elem_count++;
      }
      else if (j === arr[i].length-1 && elem_count === 0) {
        newArr.push(arr[i]);
        elem_count = 0;
        console.log("elem:", elem, "pushed", arr[i]);
      }
      if (j === arr[i].length-1) {
        elem_count = 0;
      }
    }
  }
  console.log("returned:", newArr);
  // Only change code above this line
  return newArr;
}

/* Tests: */
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [ [10, 8, 3], [14, 6, 23] ]);
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));  
console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter") should return [ ["amy", "beth", "sam"] ]);
