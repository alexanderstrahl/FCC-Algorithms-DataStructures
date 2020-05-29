//JavaScript Algorithms and Data Structures Projects: Cash Register
function checkCashRegister(price, cash, cid) {
    let usd = [["PENNY", .01], ["NICKEL", .05], ["DIME", .1], ["QUARTER", .25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
    let change = []
    let change_total = 0;
    console.log("change",cash - price)
    while(cash > price){
      for(let i = usd.length-1; i >= 0; i--){
        console.log(usd[i][1],(cash - price)/usd[i][1], "cash:", cash)
        console.log("i",i,(cash - price)/usd[i][1])
        if((cash - price)/usd[i][1] >= 1){
          console.log("bingo",Math.trunc((cash - price)/usd[i][1]))
          change.push([usd[i][0],(usd[i][1]*Math.trunc((cash - price)/usd[i][1]))])
          cash -= (usd[i][1]*Math.trunc((cash - price)/usd[i][1]))
        } 
        //need to make it so that it removes cash from cash registor when it add it to change, and checks to see if it has change to begen with
        console.log("change:", change)
      }
    } 
  return {status: "OPEN", change: change};

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
