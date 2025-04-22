class Solution {
    spiralOrder(matrix) {
        let arr = [];
        let left = 0;
            let right = matrix[0].length - 1;
        let top = 0;
            let bottom = matrix.length - 1;

        while(left <= right && top <= bottom){

            for(let i = left; i <= right; i++){
                arr.push(matrix[top][i])
            } 
            top++;

            for(let i = top; i <= bottom; i++){
                arr.push(matrix[i][right])
            } 
            right--;

            if(top <= bottom){
                for(let i = right; i >= left; i--){
                arr.push(matrix[bottom][i])
                } 
              bottom--;
            }

            if(left <= right){
              for(let i = bottom; i >= top; i--){
                  arr.push(matrix[i][left])
              } 
              left++;
          }
        }
        return arr;
    }
}
