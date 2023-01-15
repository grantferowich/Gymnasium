/* 
        col
row    [[0,0],  
        [0,0]] 
       
Accessing:
    matrix[row][col]
    matrix[x][y]
    matrix[i][j]

    Example 1:
 Input:  
 [[ 0, 0, 0, 0],
  [ 0, 0, 0, 0],
  [ 0, 0, 0, 0]]

 Output: 38


Example 2:

 Input:  
 [[ 0, 0, 0],
  [ 0, 0, 0]]

 Output: 4


Example 3:
 Input:  
 [[ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0]]

 Output: 7110272

 */

    

    const robotPaths = (matrix) => {
        let result = 0;
        //base cases: 
            // oob
            // already visited
            // reach destination
        let totalColumns = matrix[0].length -1
        let totalRows = matrix.length  -1
        const traverse = (row, col) => {
            if (row < 0 || col < 0 || col > matrix[0].length - 1 || row > matrix.length - 1){
                // out of bounds
                return;
            }
            if (matrix[row][col] === 1){
                //already visitedd
                return;
            }
            if (row === totalRows && col === totalColumns){
                result++
                return;
            }
            //toggle for tracking visited 
            matrix[row][col] = 1;
            traverse(row+1,col)
            traverse(row-1,col)
            traverse(row, col-1)
            traverse(row, col+1)
            // toggle back
            matrix[row][col] = 0;
        }
        traverse(0,0)
        return result;
    }

console.log(robotPaths( [[ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0]]
  )) // 38

console.log(robotPaths( [[ 0, 0, 0],
    [ 0, 0, 0]])) // 4

console.log(robotPaths([[ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0]])) // 7110272