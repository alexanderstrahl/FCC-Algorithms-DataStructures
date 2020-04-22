//Intermediate Algorithm Scripting: Drop it

function dropElements(arr, func) {
    let nArr = [...arr];
    console.log("**Start**")
    console.log("nArr:",nArr)
    //for(let i = 0; i < nArr.length; i = nArr.length){
      while(nArr[0] != undefined){
        if(nArr == []){
          break;
        }
        else if((!arguments[1](nArr[0]))){
          nArr.shift()
          console.log("shift:",nArr)
        }
        else if(arguments[1](nArr[0]) || nArr == []){
          console.log("return",nArr)
          return nArr  
        }  
    }
    return []
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;})// [3,4] f
  dropElements([0, 1, 0, 1], function(n) {return n === 1;})
  dropElements([1, 2, 3], function(n) {return n > 0;}) // [1,2,3] t
  dropElements([1, 2, 3, 4], function(n) {return n > 5;})