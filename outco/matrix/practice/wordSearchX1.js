/// a classic algo for backtracking is subsets or powerset, or N queens

// similarities to number of islands
// four possible directions
// implement a visited hash since cells may not be reused
// previously: start recursion after reaching a '1'
// now: start recursions after finding the first 
// char in the input word

// difference
// as long as the word is found, early termination is possible
// backtracking: when you are mid-word, you might find a new char
// that doesn't work. But, another char may work! 

const wordSearchX1 = (board, word) => {

    let m = board.length - 1; 
    let n = board[0].length -1;
    let directions = [ [-1,0], [1,0], [0,-1], [0,1] ];
    let visited = Array(m).fill().map(() => Array(m).fill(false));
    
    const dfs = (x, y, position) =>{
        let key = x.toString() + '_' + y.toString();
        //mark true
        visited[x][y] = true;

        // base case: return true
        if (position === word.length){
            return true;
        }

        for (let dir of directions){
            let newX = x + dir[0];
            let newY = y + dir[1];
            let k = newX.toString() + "_" + newY.toString()
            // 1. within boundary
            // 2. not visited
            // 3. not in word
            if ( newX >= 0 && newX < m && newY >= 0 && newY < n && !visited[key] && board[newX][newY] === word.charAt(position)){
                
                visited[k] = true;
                let result = dfs(newX, newY, position+1)
                visited[k] = false;

                if (result){
                    return true;
                }

            }
        }
        return false;
    }

    for (let x = 0; x < m; x++){
        for (let y = 0; y < n; y++){
            // let key = x.toString() + "_" + y.toString()
            // visited[key] = true;
            // starting point 
            // visited variable should be associated to the starting point 
            
            console.log(visited)
            if (board[x][y] === word.charAt(0)) {
                // start DFS
                // do we need to update visited here
                console.log('x', x)
                console.log('y', y)
                let result = dfs( x, y, 1, visited)
                console.log('hi')
                console.log('result', result)
                if (result){
                    return true;
                }
            }
        }
    }

}
    
const input = [["A","B","C","E"],
               ["S","F","C","S"],
               ["A","D","E","E"]];

const word = "ABCCED"

console.log(wordSearchX1(input, word))