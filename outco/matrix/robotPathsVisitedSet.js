const robotPathsVisitedSet = (matrix) => {
    let result = 0;
    let visited = new Set();
    //base cases: 
        // oob
        // already visited
        // reach destination
    let totalColumns = matrix[0].length -1;
    let totalRows = matrix.length  -1;
    const traverse = (row, col) => {
        let key = row.toString() + "_" + col.toString();
        if (row < 0 || col < 0 || col > matrix[0].length - 1 || row > matrix.length - 1){
            // out of bounds
            return;
        }
        if (visited.has(key)){
            //already visitedd
            return;
        }
        let destination = totalRows.toString() + "_" + totalColumns.toString();
        if (key === destination){
            result++;
            return;
        }
        //toggle for tracking visited 
        visited.add(key)
        traverse(row+1,col);
        traverse(row-1,col);
        traverse(row, col-1);
        traverse(row, col+1);
        // toggle back
        visited.delete(key);
    }
    traverse(0,0)
    return result;
}

console.log(robotPathsVisitedSet([[ 0, 0, 0],[ 0, 0, 0]]));

console.log(robotPathsVisitedSet( [[ 0, 0, 0, 0], [ 0, 0, 0, 0], [ 0, 0, 0, 0]]))