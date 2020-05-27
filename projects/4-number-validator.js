//JavaScript Algorithms and Data Structures Projects: Telephone Number Validator

function telephoneCheck(str) {
  //tests telephoneCheck("555-555-5555")
  let reg1 = (/^[\d]{3}[-][\d]{3}[-][\d]{4}/).test(str);
  //tests telephoneCheck("(555)555-5555")
  let reg2 = (/^[(]{1}[\d]{3}[)]{1}[\d]{3}[-][\d]{4}/).test(str)
  //tests telephoneCheck("(555) 555-5555")
  let reg3 = (/^[(]{1}[\d]{3}[)][\s]{1}[\d]{3}[-][\d]{4}/).test(str)
  //tests telephoneCheck("555 555 5555")
  let reg4 = (/^[\d]{3}[\s][\d]{3}[\s][\d]{4}/).test(str)
  //tests telephoneCheck("5555555555")
  let reg5 = (/^[\d]{10}$/).test(str)
  //tests telephoneCheck("1 555 555 5555")
  let reg6 = (/^[1]{1}[\s][\d]{3}[\s]{1}[\d]{3}[\s][\d]{4}/).test(str)
  //tests telephoneCheck("1 555-555-5555")
  let reg7 = (/^[1]{1}[\s][\d]{3}[-][\d]{3}[-][\d]{4}/).test(str);
  //tests telephoneCheck("1 (555) 555-5555")
  let reg8 = (/^[1]{1}[\s][(]{1}[\d]{3}[)]{1}[\s][\d]{3}[-][\d]{4}/).test(str)
  //tests telephoneCheck("1(555)555-5555")
  let reg9 = (/^[1]{1}[(]{1}[\d]{3}[)]{1}[\d]{3}[-][\d]{4}/).test(str)
 
  console.log(reg5)
  if(reg1 || reg2 || reg3 || reg4 || reg5 || reg6 || reg7 || reg8 || reg9){
    return true
  }
  else{
    return false
  }
  //return true;
}
telephoneCheck("27576227382")
telephoneCheck("5555555555")
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555")
telephoneCheck("(555) 555-5555")
telephoneCheck("555 555 5555")
telephoneCheck("5555555555")
telephoneCheck("1 555 555 5555")
telephoneCheck("27576227382")