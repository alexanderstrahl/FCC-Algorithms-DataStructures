//Intermediate Algorithm Scripting: Steamroller
//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr,fatten = []) {
    arr.forEach(i => {
      console.log(!Array.isArray(i),i)
      if(!Array.isArray(i)){
        fatten.push(i)
        console.log("push",i)
      }
      else if(Array.isArray(i)){
        console.log("steamroll",i)
        steamrollArray(i, fatten)
      }
    })
    console.log("fatten",fatten) 
    return fatten;
  }  
  
  steamrollArray([1, [2], [3, [[4]]]]);
  steamrollArray([[["a"]], [["b"]]])
  steamrollArray([1, {}, [3, [[4]]]])