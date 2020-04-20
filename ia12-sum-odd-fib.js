//Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

function sumFibs(num) {
    let sum = 2;
    let prev = 1
    let temp = prev;
    for(var fib = 1;fib <= num;  ){
      temp = prev;
      prev = fib;
      fib = temp + prev
      //console.log(fib)
      if(fib%2){
        //console.log("sum",sum, fib)
        sum +=fib; 
      }
    }
    return sum-fib;
  }
  
  sumFibs(6);
  console.log(sumFibs(1000));
  //this is somewhat hacked together...but it works 