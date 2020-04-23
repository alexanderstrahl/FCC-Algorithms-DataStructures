//var flatten = [];
function steamrollArray(arr,flatten = []) {
  //let flaten = arr.join("")//.split("").filter(item => item != "," || "[")//.map(item => parseInt(item) != NaN ? parseInt(item):item)
  //let flaten = []
  //for(let i in arr){flaten.push(arr[i])}
  let nArr = [...arr]
  //console.log(Array.isArray(nArr[0]))
  //console.log(nArr)
  for(let i in nArr){
    if(!Array.isArray(nArr[0])){
      flatten.push(nArr[0])
      nArr.shift()
      //console.log("shift",flatten,"nArr:",nArr)
    }
    else if(Array.isArray(nArr[0])){
      //nArr = nArr.slice(0,1)
      //console.log(nArr[0]+nArr[1])
      steamrollArray(nArr[0])
    }
    //console.log("nArr:",nArr)
  }
  let temp = [...flatten]
  flatten = []
  console.log(temp) 
  return temp;
}  

//steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]])
steamrollArray([1, {}, [3, [[4]]]])