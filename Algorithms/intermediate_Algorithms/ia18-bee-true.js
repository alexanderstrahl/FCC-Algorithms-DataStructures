//Intermediate Algorithm Scripting: Everything Be True

function truthCheck(collection, pre) {
    let pressF = true
    collection.map(item => {
      console.log(pre,item[pre],item[pre] > 0) 
      if(!item.hasOwnProperty(pre)){
        console.log("Press F to pay respect")
        pressF = false;
      }
      if(item.hasOwnProperty(pre) && 
        (item[pre] == 0 || 
         item[pre] == undefined || 
         (isNaN(item[pre]) && typeof item[pre] != "string")
         )){
          console.log("Nahhhh") 
          pressF = false;
      }
      console.log(item,pre,pressF)
    })
    return pressF
  }
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")) //true
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")) //false
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")) //false
  console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")) //true
  console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"))