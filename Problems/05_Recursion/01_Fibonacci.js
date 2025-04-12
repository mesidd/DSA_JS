function Fibonacci(n){
  if( n === 1 ) return 0;
  if( n === 2) return 1;
  return Fibonacci( n - 1 ) + Fibonacci( n - 2 ) ;
}

// O(2^n)

console.log(Fibonacci(4));
console.log(Fibonacci(6));
