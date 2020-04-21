function smallestCommons(arr) {
    let sorted = arr.sort((a,b) => a-b);
    let smallest = sorted[1];
    console.log(sorted)
    let found = false;
    let count = 0;
    let range = []
    //creates an array of all elements
    for(let i = sorted[0]; i <= sorted[1]; i++){
      range.push(i)
    }
    console.log(range)
    for(let k = smallest; k < 10000; k++){//while(0){//!found){
      count = 0;
      smallest = sorted[1] * k//sorted[1];
      //console.log(smallest)
      //divides smallest by each number in range
      for(let j in range){
        //console.log(smallest,j,k)
        //console.log(smallest,"sheets",smallest/j,Number.isInteger(smallest/range[j]),smallest/range[j],smallest%j)
        if(!Number.isInteger(smallest/j) && (smallest/j) != Infinity){
        //if(smallest%j == 0){
          count++;
          break;
          //smallest += sorted[1]
        }
      }
      if(count == 0 ){//&& range[j] == sorted[1]){
          console.log("found", smallest)
          found = true;
          return smallest;
        }
        //count = 0;
    }
    return smallest;
  }
  
  
  smallestCommons([1,5]);
  smallestCommons([2, 10])
  //smallestCommons([1, 13])
  //smallestCommons([23, 18]) 
  //add arr[1] to smallest
  //divide it by each number in range
  //if count==0 return smallest
  //else continue
  
  
  // num = num/x && num/y
  // 1 2 3 4 5 6 7 8 9 10
  // 2 3 5 7
  //multiply all numbers except x
  //that divive that number by each number
  //if one number isn't even add it back and go to next number
  /*
  //for(let i in sorted){
        if(!Number.isInteger(sorted/i)){
          count++;
          console.log(i,"sheet", count)
        } 
        else if(count == 0 && Number.isInteger(sorted/i)){
          smallest*=i
          //console.log(smallest)
          return smallets
        }
      //}*/