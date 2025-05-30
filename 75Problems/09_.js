// Set Matrix Zero

class Solution{
  setZero(matrix){
    let ROWS = matrix.length;
    let COLS = matrix[0].length;
    let rowZero = false;
    
    for( let r = 0 ; r < ROWS; r++ ){
      for( let c = 0; c < COLS; c++ ){
        if(matrix[r][c] === 0){
          matrix[0][c] = 0;
          if(r > 0){
            matrix[r][0] = 0;
          } else {
            rowZero = true;
          }
        }
      }
    }
  }
  
  // for(let r = 1; r < ROWS; r++){
  //   for(let c = 1; c < COLS; c++){
  //     if(matrix[0][c] === 0){
  //       for(let r = 1; r < ROWS; r++){
  //         matrix[r][c] = 0;
  //       }
  //     }
  //     if(matrix[r][0] === 0){
  //       for(let c = 1; c < COLS; c++){
  //         matrix[r][c] = 0;
  //       }
  //     }
  //   }
  // }

  for(let r = 1; r < ROWS; r++){
    for(let c = 1; c < COLS; c++){
      if(matrix[0][c] === 0 || matrix[r][0] === 0){
        matrix[r][c] = 0;
      }
    }
  }
  if(matrix[0][0] === 0){
    for(let r = 1; r < ROWS; r++){
      matrix[r][0] = 0;
    }
  }
  if(rowZero){
    for(let c = 1; c < COLS; c++){
      matrix[0][c] = 0;
    }
  }
}


