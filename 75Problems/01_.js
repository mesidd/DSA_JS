// Given two digits - need to find sum and subtraction without using + , - operator

class Solution {
  getSum(a,b){
    while(b !== 0){
      let carry = (a & b) << 1;
      a ^= b;
      b = carry;
    }
    return a;
  }
}

// Approach : use XOR , AND & Shift Operator
