/* 
Score After Flipping Matrix

Medium

You are given an m x n binary matrix grid.

Successfully tested the function 3/3/23.

A move consists of choosing any row or column and 
toggling each value in that row or column (i.e., 
changing all 0's to 1's, and all 1's to 0's).

Every row of the matrix is interpreted as a binary
 number, and the score of the matrix is the sum of 
 these numbers.

Return the highest possible score after making any
number of moves (including zero moves).


*/

const matrixScore = (grid) => {
    let result = 0
    for (let x = 0; x < grid.length; x++){
        if (grid[x][0] === 0){
            for (let col = 0; col < grid[x].length; col++){
                grid[x][col] ^= 1; 
            }
        }
    }

    for (let col = 0; col < grid[0].length; col++){
        let zeroCount = 0;
        
        for (let row = 0; row < grid.length; row++){
            if (grid[row][col] === 0){ zeroCount++;}
        }

        if (zeroCount >= Math.ceil(grid.length / 2)){
            for (let row = 0; row < grid.length; row++){
                grid[row][col] ^= 1;
            }
        }
    }

    for (let row = 0; row < grid.length; row++){
        let binaryStr = "";
        for (let col = 0; col < grid[row].length; col++){
            binaryStr += grid[row][col];
        }
        result += parseInt(binaryStr,2)
    }
    return result
}


let grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
console.log(matrixScore(grid))