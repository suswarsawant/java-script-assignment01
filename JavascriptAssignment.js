

//Funtion genrator for all the example
let functionGenrator = (FunctionName)=>{
    switch(FunctionName){
        case "primeNumber": return["",isPrime]
        case "fibonacciSeries": return ["",fibonacciSum]
        case "countEvenOddZero":return["",countEvenOddZero]

        default: return ["Invalid", null]
    }
}

// Check weather the number is prime or not
function isPrime(Number1) {
    if (Number1 <= 1) {
      return "not prime";
    } 
    for (let i = 2; i <= Math.sqrt(Number1); i++) {
      if (Number1 % i == 0) {
        return ["not prime",null];
      }
    }
    return ["prime",null];
  }


  //Fibonnaci Series for nth term
  function fibonacciSum(Number1) {
    if (Number1 <= 0) {
      return ["error",0];
    }
    let fibSeries = [0, 1];
    let sum = 1;
    for (let i = 2; i <= Number1; i++) {
      fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
      sum += fibSeries[i];
    }
    return ["Sum of fibonacci",sum];
  }

  //Odd and even in an array
  function countEvenOddZero(Number1) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < Number1.length; i++) {
      if (Number1[i] === 0) {
        zeroCount++;
      } else if (Number1[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    return {
      even: evenCount,
      odd: oddCount,
      zero: zeroCount
    };
  }




  //Output 
  //Prime number
let[message,prime]=functionGenrator("primeNumber")
let z = prime(20)
console.log(z[0])

 //FibonacciSeries
 let[mess,Fibo]=functionGenrator("fibonacciSeries")
 let x = Fibo(5)
 console.log(x[1]);


 //Odd Even
let[mes,checkcount]=functionGenerator("countEvenOddZero") 
let y= checkcount ([10,0,0,13,9,4,5,0])
console.log(y[1])

