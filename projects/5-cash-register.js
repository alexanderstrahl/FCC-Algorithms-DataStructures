//JavaScript Algorithms and Data Structures Projects: Cash Register
function checkCashRegister(price, cash, cid) {
  let usd = [["PENNY", .01], ["NICKEL", .05], ["DIME", .1], ["QUARTER", .25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
  let change = []
  let change_closed = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
  let change_total = 0;
  let total_cash = (cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1])
  //console.log("change",cash - price)
  let start_change = cash - price;
  //console.log(total_cash , cash-price)
  if(total_cash < cash-price && total_cash == cash - price){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } 
  let count = 0
  for(let item = 0; item < cid.length; item++){
    //console.log(item,cid.length-1)
    if (item > 0){
      count++
      //return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    if (total_cash < cash-price ){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
  }
  //cid.map(item => item > 0 ? false: {status: "INSUFFICIENT_FUNDS", change: []})
  
  while(cash > price && count != 50){
    count++;
    for(let i = cid.length-1; i >= 0; i--){
      // Prevents the infinate looping
      if(count == 49){
        return {status: "INSUFFICIENT_FUNDS", change: []}
      }
      if((cash - price)/usd[i][1] >= 1){ 
          // Checks if Cash in drawer is less than the optimal cash needed
          if((usd[i][1]*Math.trunc((cash - price)/usd[i][1])) > cid[i][1]){
            change.push([usd[i][0],cid[i][1]])
            change_closed[i][1] = (cid[i][1])
            cash -= cid[i][1]
            cid[i][1] -= cid[i][1]
          }
          // if the cash in drawer is more than cash needed it takes what it needs
          else{ 
            cid[i][1] -= (usd[i][1]*Math.trunc((cash - price)/usd[i][1]))
            change.push([usd[i][0],(usd[i][1]*Math.trunc((cash - price)/usd[i][1]))])
            change_closed[i][1] = ((usd[i][1]*Math.trunc((cash - price)/usd[i][1])))
            cash -= (usd[i][1]*Math.trunc((cash - price)/usd[i][1]))
          }
      }
    } 
  } 
  console.log("change:", change)
  console.log("cid:", cid)
  total_cash = cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1]

if(total_cash == 0){
  console.log("closed")
  return {status: "CLOSED", change: change_closed};
}
else{
  console.log("open") 
  return {status: "OPEN", change: change};
}
} 

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
