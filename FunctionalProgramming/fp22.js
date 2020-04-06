//Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria

function checkPositive(arr) {
    // Only change code below this line
    return arr.every(item => item > 0 ? true : false);
    // Only change code above this line
  }
  console.log(checkPositive([1, 2, 3, 5]));