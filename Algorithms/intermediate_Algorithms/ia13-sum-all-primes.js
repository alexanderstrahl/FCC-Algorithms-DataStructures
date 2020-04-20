// Intermediate Algorithm Scripting: Sum All Primes

function sumPrimes(num) {
    let sum = 0
    let count = 0
    for (let i = 0; i <= num; i++){
      count = 0
      for (let j = 0; j <= num; j++){
        if(i != 1 && j != 1 && i != j && Number.isInteger(i/j)) {
          //console.log("count",count)
          count++;
        }
        else if (count == 0 && j == num && i != 1){
          sum += i
          //console.log(i,sum)
        }
      }
    
    } 
    console.log(sum)
    return sum;
  }
  
  sumPrimes(10); //17
  sumPrimes(100); //1060
  sumPrimes(977); //73156