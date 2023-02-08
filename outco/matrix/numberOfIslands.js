// input:

[['1','1','1','0'],
 ['1','1','1','0']
 ['0','0','0','0']
 ['0','1','1','0']
]

// output: 2

// increment number of islands by 1 
// via presence of '1's

// easy double for loop traversing the grid
// start traversal once a 1 is found to 
// get all the connected islands



const numberOfIslands = (grid) => {

    let m = grid.length;
    let n = grid[0].length;
    let output = 0;
    let directions = [ [-1,0], [1,0], [0,-1], [0,1] ];
    const visited = Array.from({length: m}, () => Array.from({length: n}, () => false));


    const dfs = (grid, x, y, visited) => {
        // mark cell as visited 
        visited[x][y] = true;

        // base case checks
        // 1. within bounds
        // 2. not visited
        // 3. not water 

        for (let x = 0; x < directions.length){
            let dir = directions[x];
            let newX = x + dir[0];
            let newY = y + dir[1];

            if (newX >= 0 && newX < m && newY >= 0 && newY < n && !visited[x][y]){
                dfs(grid, newX, newY, visited);
            }
        }
    }

    for (let x = 0; x < m; x++){
        for (let y = 0; y < n; y++){
            // easy double for loop to find the starting 1
            if (grid[x][y] === '1' && !visited[x][y]){
                // check (x,y) is already visited?
                // start the traversal
                // get all the connected islands 
                dfs(grid, x, y, visited)
                count++
            }
        }
    }

    return output;
}