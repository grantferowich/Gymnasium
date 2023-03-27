/* 
Eight Queens

CTCI 8.12

** partially tested the function 03/23/23.

Write an algorithm to print all ways of arranging eight queens on an
8 x 8 chess board so that none of them share the same row, column, or diagonal. 
In this case, "diagonal" means all diagonals, not just the two that bisect the board.

Input: a grid
output: a grid
*/

const GRID_SIZE_INT = 8;

const checkValid = (columnsArr, row1Int, column1Int) => {
    for ( let row2Int = 0; row2Int < row1Int; row2Int++){
        const column2Int = columnsArr[row2Int]

        // check if rows have a queen in the same column
        if (column1Int === column2Int){
            return false;
        }

        // check diagonals: if the distance between the columns equals the 
        // distance between the rows, then they're in the same diagonal.
        const columnDistanceInt = Math.abs(column2Int - column1Int);
        const rowDistanceInt = row1Int - row2Int;
        if (columnDistanceInt === rowDistanceInt){
            return false;
        }
    }
    return true;
}

const placeQueens = (rowInt, columnsArr, resultsArr) => {
    // found a valid placement
    if (rowInt === GRID_SIZE_INT){
        resultsArr.push([...columnsArr])
        return
    } 

    for (let colInt = 0; colInt < GRID_SIZE_INT; colInt++){
        if (checkValid(columnsArr, rowInt, colInt)){
            columnsArr[rowInt] = colInt
            placeQueens(rowInt + 1, columnsArr, resultsArr)
        }
    }
}

let columnsArr = Array(GRID_SIZE_INT).fill(-1)
let resultsArr = []

placeQueens(0, columnsArr, resultsArr)
console.log(resultsArr.length)