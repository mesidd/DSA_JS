class Solution {
    countBits(n) {
        let arr = [];
        for(let i = 0; i <= n; i++ ){
            let sum = 0;
            const binary = i.toString(2);
            for(let ch of binary){
                if( ch === '1') sum++;
            }
            arr.push(sum);
        }
        return arr;
    }
}

// Another Method

countBits(n){
  let arr = [];
  let count = 0;
  for( let i = 0; i <= n; i++){
    let num = i;
     while( num > 0 ){
       count += num & 1;
       num >>= 1;
  }
  arr.push(count);
  }
  return arr;
}
