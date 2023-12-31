/* 

315 - Longest Increasing Path
Given an integer matrix, find the length of the longest increasing path.

Given each cell, you can either move to four directions, left, right, up or down. 
You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

*/

// input: [[ 13 , 1 , 2 ],
//         [ 3 , 5 , 8 ]]
// output: 5

//base cases: 
    // - oob
    // - already traversed 

    // init directions array (possible moves)
    // for each possible move
    // add the x coord to the current x coord
    // add the y coord to the current y cord


const longestIncreasingPath = (matrix) => {
    let directions = [[ 0 , 1 ], [ 1 , 0 ], [ 0 , -1 ], [ -1 , 0]];
    
    if ( matrix.length === 0 ){
        return 0;
    }

    let height = matrix.length;
    let width = matrix[0].length;
    let cache = {};
    let output = 0;
    
    const dfs = (matrix, x , y ) =>{
        let key = x + ',' + y;
        if (cache[key]){
            return cache[key];
        }
        cache[key] = 0;
        for (let d of directions){
            let nextRow = x + d[0];
            let nextCol = y + d[1];

            if (nextRow >= 0 && nextRow < height && nextCol >= 0 && nextCol < width){
                if (matrix[nextRow][nextCol] > matrix[x][y]){
                    cache[key] = Math.max(cache[key], dfs(matrix, nextRow, nextCol));
                }
            }
        }
        return cache[key] += 1;
    }

  for (let r = 0; r < height; r++){
    for (let l = 0; l < width; l++){
        output = Math.max(output, dfs(matrix, r, l))
    }
  }
  return output;
}

console.log(longestIncreasingPath([[ 13 , 1 , 2 ],
                                   [ 3 , 5 , 8 ]])) // 5


nums2 = [
[9, 9, 4],
[6, 6, 8],
[2, 1, 1]
]

console.log(longestIncreasingPath(nums2)) // 4

nums3 = [
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1]
    ]


console.log(longestIncreasingPath(nums3)) 