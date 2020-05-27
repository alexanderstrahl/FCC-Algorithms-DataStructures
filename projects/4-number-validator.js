//JavaScript Algorithms and Data Structures Projects: Telephone Number Validator

function telephoneCheck(str) {
  let reg = (/[1(\s]*?\d{3}[)-\s]*?\d{3}[-]?\d{4}/g).test(str)
  let reg2 = (/[\d]{10}/gi).test(str)

  console.log(reg, reg2)
  return reg;
}

telephoneCheck("555-555-5555");
telephoneCheck("5555555555")
telephoneCheck("1 (555) 555-5555")
telephoneCheck("5555555") 