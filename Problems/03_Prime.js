
// n > 2

function Prime(n){
  for ( let i = 2 ; i < n ; i++ ){
    if ( n % i === 0 ) return "Non Prime"
  }
  return "Prime"
}

console.log(Prime(3));
console.log(Prime(12));
console.log(Prime(99));
