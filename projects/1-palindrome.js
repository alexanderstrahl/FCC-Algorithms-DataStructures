function palindrome(str) {
  str = str.replace(/[\s_,.''--():/]/gi,"").toLowerCase();
  let pal = str.split("");
  while (pal.length > 1){
    console.log(pal.length)
    if(pal[0] == pal[pal.length-1] && pal.length > 1){
      console.log(pal)
      pal.pop();
      pal.shift();
      //console.log(pal)
    }
    if(pal.length <= 1){
      return true;
    }
    if(pal[0] != pal[pal.length-1] && pal.length > 1){
      return false;
    }
    //return pal;
  }
}



//console.log(palindrome("eye")); 
console.log(palindrome("_eye")); 
console.log(palindrome("race car")); 
//console.log(palindrome("A man, a plan, a canal. Panama"));
//console.log(palindrome("never odd or even"));
console.log(palindrome("0_0 (: /-\ :) 0-0")); 