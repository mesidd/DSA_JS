function bubbleSort(arr) {
  let repeat = arr.length
  let swapped 
  do {
    swapped = false
    for( let i = 0 ; i < repeat - 1 ; i++ ){
      if ( arr[i] > arr[i+1] ){
        [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ]
        swapped = true
      }
    }
    repeat--
  }
  while(swapped)
  return arr;
}

const arr = [2,3,6,5,1,8]

console.log(bubbleSort(arr))
