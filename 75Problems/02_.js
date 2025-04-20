// Missing Number

class Solution {
    missingNumber(nums) {
        let sum = 0;
        let n = nums.length;
        for( let i = 0 ; i < n ; i++ ){
            sum += nums[i];
        }
        const total = (n*(n+1))/2;
        return total-sum;
    }
}

// Approach : 

class Solution {
  missingNumber(num) {
    let n = nums.length;
    nums.sort((a,b) => a-b);
    for(let i = 0; i < n; i++ ){
      if( num[i] !== i ){
        return i;
      }
    }
    return n;
  }
}

// 
