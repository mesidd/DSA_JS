class Solution {
    bitsOne(n) {
        let count = 0;
        let compare = n;
        while( compare > 0 ){
            count += compare & 1;
            compare >>= 1;
        }
        return count;
    }
}
