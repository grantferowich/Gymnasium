/* 
315 - Longest Increasing Path
Given an integer matrix, find the length of the longest increasing path.

Given each cell, you can either move to four directions, left, right, up or down. 
You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

*/

// input: [[ 13 , 1 , 2 ],
//         [ 3 , 5 , 8 ]]
// output: 5

const longestIncreasingPath = (matrix) => {
    let height = matrix.length;
    let width = matrix[0].length;
    let flat = []
    let local = 1;
    let ultimate = 1;
    for (let x = 0; x < height; x++){
        if (Array.isArray(matrix[x])){
            for (let k = 0; k < matrix[x].length; k++){
                flat.push(matrix[x][k])
            }
        }
    }

    for (x = 0; x < flat.length; x++){
        if (flat[x+1] > flat[x]){
            local++;
        } else {
            local = 1
        }
        ultimate = Math.max(ultimate, local)
        
    }
    return ultimate;
}

console.log(longestIncreasingPath([[ 13 , 1 , 2 ],
                                   [ 3 , 5 , 8 ]])) // 5