function productExceptSelf(nums){
  const n = nums.length;
  const arr =  new Array(n).fill(1);
  let prefix = 1;
  let suffix = 1;
  for(let i = 0; i < n; i++){
    arr[i] = prefix;
    prefix *= nums[i];
  }
  for(let i = 0; i < n; i++){
    arr[i] *= suffix;
    suffix *= nums[i];
  }
  return arr;
}
