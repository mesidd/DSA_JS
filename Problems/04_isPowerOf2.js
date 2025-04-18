// Brute Force

// function PowerOf2( n ) {
//   if ( n < 1 ) return false;

//   while( n >= 2 ) {
//     if( n % 2 !== 0 ){
//       return false;
//     }
//     n /= 2;
//   }
//   return true;
// }

// Bitwise Operator

function PowerOf2(n){
  if ( n < 1 ) return false;
  if(( n & ( n - 1 ) ) === 0 ) {
    return true;
  }
  return false;
}

console.log(PowerOf2(2)); // true
console.log(PowerOf2(3)); // false
console.log(PowerOf2(128)); // true
console.log(PowerOf2(1)); // true
console.log(PowerOf2(0)); // false
