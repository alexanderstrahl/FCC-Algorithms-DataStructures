//JavaScript Algorithms and Data Structures Projects: Cash Register
function checkCashRegister(price, cash, cid) {
  let usd = [["PENNY", .01], ["NICKEL", .05], ["DIME", .1], ["QUARTER", .25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
  let change = []
  let change_total = 0;
  console.log("change",cash - price)
  console.log((cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1]) , cash-price)
      if((cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1]) < cash-price){
        return {status: "INSUFFICIENT_FUNDS", change: []}
      }
  while(cash > price){
    for(let i = cid.length-1; i >= 0; i--){
      //console.log(usd[i][1],(cash - price)/usd[i][1], "cash:", cash)
      //console.log("i",i,(cash - price)/usd[i][1])
      
      if((cash - price)/usd[i][1] >= 1){
        //console.log("bingo",Math.trunc((cash - price)/usd[i][1]))
        //console.log("tes",cid[i][1],(usd[i][1]*Math.trunc((cash - price)/usd[i][1])))
        //if(cid[i][1] < (usd[i][1]*Math.trunc((cash - price)/usd[i][1]))){
          //change.push([usd[i][0],(cid[i][1])])
          //cash -= cid[i][1]
          //cid[i][1] -= cid[i][1]
        //}
        //if{
          //subtract number of type of change from highest change total
          //cid[i][1] -= (usd[i][1]*Math.trunc((cash - price)/usd[i][1]))
          
          //console.log("zzz",[usd[i][0],(usd[i][1]*Math.trunc((cash - price)/usd[i][1]))])
          if((usd[i][1]*Math.trunc((cash - price)/usd[i][1])) > cid[i][1]){
            change.push([usd[i][0],cid[i][1]])
            //change.push([usd[i][0],(usd[i][1]*Math.trunc((cash - price)/usd[i][1]))]) 
            //console.log("what!!", cash, cid[i][1])
            cash -= cid[i][1]
            cid[i][1] -= cid[i][1]
          }
          else{ 
            cid[i][1] -= (usd[i][1]*Math.trunc((cash - price)/usd[i][1]))
            change.push([usd[i][0],(usd[i][1]*Math.trunc((cash - price)/usd[i][1]))])
            //console.log("cash", (usd[i][1]*Math.trunc((cash - price)/usd[i][1])),(usd[i][1]*Math.trunc((cash - price)/usd[i][1]))-(cid[i][1]))
            cash -= (usd[i][1]*Math.trunc((cash - price)/usd[i][1]))
          }
      } 
      //need to make it so that it removes cash from cash registor when it add it to change, and checks to see if it has change to begen with
      //console.log("change:", change)
    } 
  } 
  console.log("change:", change)
  console.log("cid:", cid)
return {status: "OPEN", change: change};

}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
