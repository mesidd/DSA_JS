class Solution{
  twoSums(nums, target){
    const indices = {};
    for(let i = 0; i < nums.length; i++){
      indices[nums[i]] = i;
    }
    for ( let j = 0; j < nums.length; j++){
      let diff = target - nums[j];
      if(diff !== undefined && indices[diff] !== j){
        return [i, indices[diff]];
      }
    }
    return [];
  }
}
