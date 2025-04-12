function binarySearch ( arr, value ) {
  let start = 0
  let end = arr.length - 1

  while ( start <= end ){
    let mid = Math.floor(( start + end ) / 2 );
    if ( value > arr[mid] ){
      start = mid + 1 ;
    }
    if ( value === arr[mid] ){
      return mid ;
    }
    else {
      end = mid - 1 ;
    }
}
