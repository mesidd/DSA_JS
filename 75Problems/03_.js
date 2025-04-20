// Finding Reverse of a number : range [-2^31, 2^31-1]

class Solution {
    reverse(x) {
        let number = 0;
        let isNegative = x >= 0 ? false : true ;
        x = x > 0 ? x : x * -1;
        while(x !== 0){
            number += (x % 10);
            number *= 10;
            x = Math.floor(x/10);
        }
        number = Math.floor(number / 10);
        number = isNegative ? number * -1 : number;
        if( number < (-1 * Math.pow(2,31)) || number > (Math.pow(2,31) - 1)) {
            return 0;
        } else {
            return number;
        }
    }
}
