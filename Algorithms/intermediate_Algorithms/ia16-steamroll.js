//Intermediate Algorithm Scripting: Steamroller
//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr,flatten = []) {
    let nArr = [...arr]
    nArr.map(i => {
      if(!Array.isArray(i)){
        flatten.push(nArr[0])
        nArr.shift()
      }
      else if(Array.isArray(i)){
        steamrollArray(i, flatten)
      }
    })
    let temp = [...flatten]
    flatten = []
    console.log(temp) 
    return temp;
  }  
  
  steamrollArray([1, [2], [3, [[4]]]]);
  steamrollArray([[["a"]], [["b"]]])
  steamrollArray([1, {}, [3, [[4]]]])