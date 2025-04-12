
// n >= 2

function Fibonacci(n){
  if ( n === 1 ) return [0];
  const fib = [0,1];
  for ( let i = 2; i < n; i++){
    fib[i] = fib[i-2] + fib[i-1];
  }
  return fib;
}

console.log(Fibonacci(4)); // [ 0, 1, 1, 2 ]
console.log(Fibonacci(2)); // [ 0, 1 ]
