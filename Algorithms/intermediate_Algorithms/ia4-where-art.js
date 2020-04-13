//Intermediate Algorithm Scripting: Wherefore art thou

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
    let sourceKey = Object.keys(source);
    console.log(sourceKey)
    return collection.filter( item => 
      sourceKey.every(key => 
        item.hasOwnProperty(key) && item[key] === source[key]
      )
    );
  

  // Only change code above this line
}
  
  //console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); 
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }];
      //console.log(collection.filter(item => item.includes(source)));
      //console.log(collection[i].last == source.last)