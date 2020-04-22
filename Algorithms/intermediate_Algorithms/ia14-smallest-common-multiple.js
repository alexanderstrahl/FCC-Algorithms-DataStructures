//Intermediate Algorithm Scripting: Smallest Common Multiple

function smallestCommons(arr) {
  let sorted = arr.sort((a,b) => a-b);
  let smallest = sorted[1];
  let count = 0
  for (let i = sorted[1] - 1; i >= sorted[0]; i--) {
    //console.log(i,smallest)
    count == 0;
    if (Number.isInteger(smallest/i) == 0) {
      //console.log("count",count)
      count ++;
      smallest += sorted[1];
      i = sorted[1];
    }
  }
  //console.log(smallest)
  return smallest; 
};

// test here
smallestCommons([1, 5]);
//smallestCommons([23, 18])
//smallestCommons([1, 13])