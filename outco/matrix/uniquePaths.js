/* 
Suppose a robot may only move right or down in a matrix from 
0,0 to m,n.

[ 3, 7 ] => 28
[ 3, 2 ] => 3

*/


const uniquePaths = (m,n) => {
    let visited = new Set();
    let result = 0;
    //base cases: 
        // oob
        // already visited
        // reach destination
        
    let totalColumns = n - 1;
    let totalRows = m -1;

    const traverse = (row, col) => {
        let key = row.toString() + '_' + col.toString()
        if (row < 0 || col < 0 || col > totalColumns || row > totalRows){
            // out of bounds
            return;
        }

        if (visited.has(key)){
            return;
        }
        let destination = totalRows.toString() + '_' + totalColumns.toString();
        if (key === destination){
            result++
            return;
        }

        //toggle for tracking visited 
        visited.add(key);
        traverse(row+1,col)
        traverse(row, col+1)
        // toggle back
        visited.delete(key)
    }
    traverse(0,0)
    return result;
}

console.log(uniquePaths( 3, 7)) // 28
console.log(uniquePaths( 3, 2)) // 3