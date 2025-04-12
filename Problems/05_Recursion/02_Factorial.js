function Factorial(n){
  if ( n === 0 ) return 1;
  return n * Factorial( n - 1 );
}

// O(n)

console.log(Factorial(5));
console.log(Factorial(8));
