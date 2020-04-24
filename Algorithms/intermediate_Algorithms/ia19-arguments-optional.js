//Intermediate Algorithm Scripting: Arguments Optional

function addTogether() {
    let args = [...arguments];
    //console.log("Arguments:", args)
    let additron = 0; 
    //console.log(args,additron)
    if(args.length > 1){
      //console.log("case 1")
      args.map(item => {typeof item == "number" ? (additron += item) : additron = undefined})
      return additron
      }
    else if(args.length === 1 && typeof args[0] != "string"){
      //console.log("case 2",args)
      additron += args[0]
      return function(x){
        //console.log("x",x,typeof x)
        if (typeof x == "number") {
          return additron += x
          } 
        else if (typeof x != "number"){
          return undefined
          }
      }
    }
    else {
      //console.log("case 3")
      return undefined
    }
    //return additron;
  }
  
  console.log(addTogether(2,3));
  console.log(addTogether(2)(3))
  console.log(addTogether("http://bit.ly/IqT6zt"))
  console.log(addTogether(2, "3"))
  console.log(addTogether(2)([3]))