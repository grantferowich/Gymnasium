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
    let count = 0;
    let directions = [ [-1,0], [1,0], [0,-1], [0,1] ];
    const visited = new Array(m).fill(0)
    for (let i = 0; i < m; i++){
        visited[i] = new Array(n).fill(0)
    }

    const dfs = (grid, i, j, visited) => {
        // mark cell as visited 
        visited[i][j] = true;

        // base case checks
        // 1. within bounds
        // 2. not visited
        // 3. not water 

        for (let k = 0; k < directions.length; k++){
            let dir = directions[k];
            let newX = i + dir[0];
            let newY = j + dir[1];

            if (newX >= 0 && newX < m && newY >= 0 && newY < n && !visited[newX][newY] && grid[newX][newY] === '1'){
                // console.log('hi')
                return dfs(grid, newX, newY, visited);
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
                count++
                console.log(`hi ...${x}, ${y}`)
                dfs(grid, x, y, visited)
            }
        }
    }

    return count;
}

const input0 = [['1','1','1','0'],
                ['1','1','1','0']
                ['0','0','0','0']
                ['0','1','1','0']]
const result0 = numberOfIslands(input0)
console.log(result0)