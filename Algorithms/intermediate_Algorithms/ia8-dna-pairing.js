//Intermediate Algorithm Scripting: DNA Pairing

function pairElement(str) {
    let dna = str.split("");
    let arr = [];
    for(let item in dna) {
      if (dna[item] == "G"){
        arr.push(["G", "C"]);
      }
      else if (dna[item] == "C"){
        arr.push(["C","G"]);
      }
      else if (dna[item] == "A"){
        arr.push(["A","T"]);
      }
      else if (dna[item] == "T"){
        arr.push(["T","A"]);
      }
    }
    return(arr);
  }
  
  console.log(pairElement("GCG"));
  console.log(pairElement("ATCGA"));
   