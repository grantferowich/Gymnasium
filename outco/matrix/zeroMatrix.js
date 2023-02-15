

const zeroMatrix = (matrix) => {
    
    let row = Array(matrix.length).fill(0);
    let col = Array(matrix[0].length).fill(0);

    for (let x = 0; x < matrix.length; x++){
        for (let y = 0; y < matrix[0].length; y++){
            if (matrix[x][y] === 0){
                row[x] = true;
                col[y] = true;
            }
        }
    }

    const nullifyRow = (row) => {
        for (let x = 0; x < matrix[0].length; x++){
            matrix[row][x] = 0; 
        }
    }

    const nullifyCol = (col) => {
        for (let y = 0; y < matrix[0].length; y++){
            matrix[y][col] = 0; 
        }
    }

    for (let x = 0; x < matrix.length; x++){
        if (row[x]){
            nullifyRow(x)
        }
    }

    for (let y = 0; y < matrix[0].length; y++){
        if (col[y]){
            nullifyCol(y)
        }
    }

    return matrix
}

const input1 = [[0,1,2],
                [3,4,5],
                [6,7,8]]

console.log(zeroMatrix(input1))
//const input1 = [[0,0,0],
//                [0,4,5],
//                [0,7,8]]

/* 
[ [ 0, 0, 0 ], 
  [ 0, 4, 5 ], 
  [ 0, 7, 8 ] ]
*/