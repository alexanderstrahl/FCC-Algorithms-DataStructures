//Intermediate Algorithm Scripting: Wherefore art thou

function whatIsInAName(collection, source) {
    let sourceArr = Object.entries(source)
    var arr = [];
    // Only change code below this line
    for(let i in collection){
      //for(let j in source){
        console.log(sourceArr)
        console.log(collection[i].hasOwnProperty(source))
        if(collection[i].last === source.last ||
        collection[i].first === source.first){
          arr.push(collection[i]);
          //console.log(arr);//"yeet",collection[i]);
        }
        else{
          arr = [] 
        }
      //}
    } 
    // Only change code above this line
    return arr;
  }
  
  //console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); 
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }];
      //console.log(collection.filter(item => item.includes(source)));
      //console.log(collection[i].last == source.last)