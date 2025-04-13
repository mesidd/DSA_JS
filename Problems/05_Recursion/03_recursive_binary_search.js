function recursiveBinarySearch( arr, value ){
  return search ( arr, value, 0 , arr.length - 1)
}

function search( arr, value, start, end){
  if( start > end ) return -1;

  let mid = Math.floor((start + end) / 2)
  if ( value === arr[mid]){
    return mid;
  }
  if( value < arr[mid]){
    return search(arr, value, start, mid - 1)
  }
  else{
    return search( arr, value, mid + 1 , end)
  }
}


console.log(recursiveBinarySearch( [1,2,3,4,5], 3 ))
console.log(recursiveBinarySearch( [1,2,3,4,5], 10 ))
console.log(recursiveBinarySearch( [1,2,3,4,5], 4 ))
