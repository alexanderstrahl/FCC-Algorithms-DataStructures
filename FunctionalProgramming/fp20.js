function sentensify(str) {
    // Only change code below this line
    let arr = str.split(/[,.-]/)
    return arr.join(" ")
  
    // Only change code above this line
  }
  console.log(sentensify("May-the-force-be-with-you"));