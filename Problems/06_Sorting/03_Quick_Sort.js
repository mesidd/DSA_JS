function quickSort(arr){
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for( let i = 0 ; i < arr.length - 1 ; i++ ) {
    if( arr[i] < pivot ){
      leftArr.push(pivot);
    }
    else{
      rightArr.push(pivot);
    }
  }
  return [...quickSort(leftArr), pivot , ...quickSort(rightArr)]
}
