//JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter

function convertToRoman(num) {
    let numCon = [];
    let numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let romanNumerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    while(num > 0){
    for(let i in numbers){
      if (Math.trunc(num/numbers[i]) > 0){
          let zib = Math.trunc(num/numbers[i])
            while(zib > 0){
              numCon.push(romanNumerals[i]);
              num -= numbers[i];
              zib--
          } 
      } 
    }}
    return numCon.join("");  
  }
   
  console.log(convertToRoman(83));
  //console.log(convertToRoman(891));
  //console.log(convertToRoman(3999));