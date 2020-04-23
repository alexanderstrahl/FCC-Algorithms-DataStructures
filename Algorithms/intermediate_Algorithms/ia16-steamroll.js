//Intermediate Algorithm Scripting: Steamroller
//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr,flatten = []) {
    //let nArr = [...arr]
    arr.map(i => {
      if(!Array.isArray(i)){
        flatten.push(i)
        arr.shift()
      }
      else if(Array.isArray(i)){
        steamrollArray(i, flatten)
      }
    })
    console.log(flatten) 
    return flatten;
  }  
  
  steamrollArray([1, [2], [3, [[4]]]]);
  steamrollArray([[["a"]], [["b"]]])
  steamrollArray([1, {}, [3, [[4]]]])