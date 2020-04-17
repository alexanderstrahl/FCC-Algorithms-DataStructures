//Intermediate Algorithm Scripting: Sorted Union

function uniteUnique(arr) {
  let sorted = arguments[0];
  for(let arg = 1; arg < arguments.length; arg++) {
    sorted = [...new Set([...sorted,...arguments[arg]])]  
  }
  return sorted;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));