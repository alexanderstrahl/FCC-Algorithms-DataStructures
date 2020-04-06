//Intermediate Algorithm Scripting: Sum All Numbers in a Range

function sumAll(arr) {
    let newArr = [...arr].sort(function(a, b){return a-b});
    let sum = 0;
    for(let i = newArr[0];i <= newArr[1]; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumAll([5, 10]));
  