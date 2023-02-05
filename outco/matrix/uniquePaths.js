/* 
Partially successfully tested the function 2/3/23.
The function has an exponential runtime O(2^M+N).
Suppose a robot may only move right or down in a matrix from 
0,0 to m,n.

[ 3, 7 ] => 28
[ 3, 2 ] => 3

*/


const uniquePaths = (m,n) => {
    let table = Array(m).fill().map(() => Array(n).fill(0))
    table[0][0] = 1;
    let totalColumns = n - 1;
    let totalRows = m - 1;
    for (let x = 0; x <= totalRows; x++){
        for (let y = 0; y <= totalColumns; y++){
           if (x > 0){
            table[x][y] += table[x-1][y];
           }
           if (y > 0){ 
            table[x][y] += table[x][y-1];
           }
        }
    }
    return table[totalRows][totalColumns];
}

console.log(uniquePaths( 3, 7)) // 28
console.log(uniquePaths( 3, 2)) // 3
console.log(uniquePaths(23, 15)) //  function takes too long 