//JavaScript Algorithms and Data Structures Projects: Caesars Cipher
function rot13(str) {
    let cipher = str.split("")
    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    //console.log(alph[alph.indexOf(cipher[i])-13])
  
    for(let i in cipher){
      //console.log(alph.indexOf(cipher[i])-13)
      if(cipher[i] == " "){cipher[i] = " "}
      else if(cipher[i] == "?"){cipher[i] = "?"}
      else if(cipher[i] == "!"){cipher[i] = "!"}
      else if(cipher[i] == "."){cipher[i] = "."}
      else if(alph.indexOf(cipher[i])-13 < 0){
        console.log("reee",26+alph.indexOf(cipher[i])-13, alph[26+alph.indexOf(cipher[i])-13])
        cipher[i] = alph[26+alph.indexOf(cipher[i])-13]
      }
      //console.log("zzz", alph.indexOf(cipher[i]),alph[alph.indexOf(cipher[i])-13])
      //if(alph.indexOf(cipher[i])-13 != undefined || alph.indexOf(cipher[i])-13 < 0){
      else if(alph.indexOf(cipher[i])-13 != undefined){
        console.log(alph[alph.indexOf(cipher[i])-13])
        cipher[i] = alph[alph.indexOf(cipher[i])-13]
      }
    }
    return cipher.join("");
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  console.log(4-13)