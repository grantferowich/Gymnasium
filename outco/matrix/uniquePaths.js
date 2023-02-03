/* 
Partially successfully tested the function 2/3/23.
The function has an exponential runtime O(2^M+N).
Suppose a robot may only move right or down in a matrix from 
0,0 to m,n.

[ 3, 7 ] => 28
[ 3, 2 ] => 3

*/


const uniquePaths = (m,n) => {
    let result = 0;
    //base cases: 
        // oob
        // already visited
        // reach destination
    let totalColumns = n - 1;
    let totalRows = m -1;

    const traverse = (row, col) => {
      
        if (row < 0 || col < 0 || col > totalColumns || row > totalRows){
            // out of bounds
            return;
        }

        if (row === totalRows && col === totalColumns){
            result++
            return;
        }

        //toggle for tracking visited 
       
        traverse(row+1,col)
        traverse(row, col+1)
        // toggle back
        
    }
    traverse(0,0)
    return result;
}

console.log(uniquePaths( 3, 7)) // 28
console.log(uniquePaths( 3, 2)) // 3
console.log(uniquePaths(23, 15)) //  function takes too long 