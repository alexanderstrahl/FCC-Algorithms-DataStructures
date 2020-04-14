//Intermediate Algorithm Scripting: Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    let arr = str.split(/(?=[A-Z])/).join(" ").split(/[\s_-]/).filter(item => item !== "").join("-").toLowerCase()//;
    return arr; 
  } 
  
  console.log(spinalCase('This Is Spinal Tap'));
  console.log(spinalCase("thisIsSpinalTap")); 
  console.log(spinalCase("The_Andy_Griffith_Show"));
  console.log(spinalCase("Teletubbies say Eh-oh"));
  console.log(spinalCase("AllThe-small Things"));