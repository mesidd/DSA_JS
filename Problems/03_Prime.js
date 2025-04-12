

function Prime(n){
  if( n < 2 ) {
    return "Non-Prime"
  }
  
  // for ( let i = 2 ; i < n ; i++ ){
  
  for ( let i = 2 ; i < Math.sqrt(n) ; i++ ){
    if ( n % i === 0 ) return "Non Prime"
  }
  return "Prime"
}

console.log(Prime(3)); // Prime
console.log(Prime(12)); // Non-Prime
console.log(Prime(99)); // Non-Prime

