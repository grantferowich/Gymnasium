/* 
ROTATE MATRIX
CTCI 1.7

Given an image represented by an N x N matrix,
where each pixel in the image is represented 
by an integer, write a method to rotate the image
by 90 degrees. Can you do this in place? 

Input: 
[[ 1, 2], 
 [ 3, 4]]

 Output: 
 [[4 , 1],
  [3 , 2]]

  Ideas: 
  So, 1 was at [0][0]
  then, 1 was at [0][1]
  
  The idea here is to assign the top, right, bottom 
  and left edges to variables, then, move left to the top, 
  move the top to the right, move the right to the bottom,
  move the bottom to the left.

  suppose 4x4 matrix
*/


const rotateMatrix = (matrix) => {
  
    if (matrix.length === 0 || matrix.length !== matrix[0].length){ return; }
    
    let n = matrix.length;

    for (let layer = 0; layer < n / 2; layer++){
      let first = layer;
      let last = n - 1 - layer;
      
      for (let x = first; x < last; x++){

        let offset = x - first;
        let topLeft = matrix[first][x] // save top
        
        matrix[first][x] = matrix[last - offset][first];
        // update top left
        // 0,0 = 2, 0

        // update bottom left
        // 2, 0 = 2, 2
        matrix[last-offset][first] = matrix[last][last-offset];

        // update bottom right
        // 2, 2 = 0, 2
        matrix[last][last - offset] = matrix[x][last];

        matrix[x][last] = topLeft;
        // update bottom left 
        // 2,0 = 0,0
      }

    }
    return matrix
  }
  
  const input1 = [[ 1, 2, 3],
                 [ 4, 5, 6],
                 [ 7, 8, 9]]
  
  //   [[7, 4, 1],
  //    [8, 5, 2]
  //    [9, 6, 3]]
  
  console.log(rotateMatrix(input1))