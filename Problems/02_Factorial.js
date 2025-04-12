function Factorial(n){
  let fact = 1;
  for ( let i = 2 ; i <= n; i++ ){
    fact *= i;
  }
  return fact;
}

console.log(Factorial(8)); // 40320
console.log(Factorial(4)); // 32
console.log(Factorial(5)); // 120
console.log(Factorial(1)); // 1
