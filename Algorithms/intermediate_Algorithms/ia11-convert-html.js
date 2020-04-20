//Intermediate Algorithm Scripting: Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    //let reg = /[&]/;
    let arr = str.split("");
    for(let i in arr) {
      if(arr[i] == "&"){
        arr[i] = "&amp;"
      }
      else if(arr[i] == "<"){
        arr[i] = "&lt;"
      }
      else if(arr[i] == ">"){
        arr[i] = "&gt;"
      }
      else if(arr[i] == '"'){
        arr[i] = "&quot;"
      }
      else if(arr[i] == "'"){
        arr[i] = "&apos;"
      }
    }
    arr = arr.join("")
    //arr = str.replace("&","&amp").replace("<","&lt")
    return arr;  
  }
   
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));