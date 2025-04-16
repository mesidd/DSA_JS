function cartesianProduct(arr1,arr2){
  const arr = []
  for ( let i = 0 ; i < arr1.length ; i++ ){
    // let temp = [];
    for ( let j = 0 ; j < arr2.length ; j++ ){
      // temp.push(arr1[i],arr2[j])
      // arr.push(temp);
      // temp = [];
      arr.push([arr[i],arr[j]]);
    }
  }
  return arr;
}


