
function climbingStaircase(n) {
  if ( n === 0 ) return 1;
  if ( n === 1 ) return 1;
  if ( n === 2 ) return 2;
  return ( climbingStaircase(n - 1) + climbingStaircase(n - 2) )
}

// function climbingStaircase(n) {
//   const noOfWays = [1,2];
//   for( let i = 2; i < n; i++ ){
//     noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
//   }
//   return noOfWays[n-1];
// }
