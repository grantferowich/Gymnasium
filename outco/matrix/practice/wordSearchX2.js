// create state variables
// return state variables
// define and invoke helper method
// base case
// recursive case

const wordSearchX2 = (matrix, word) =>{
    let height = matrix.length - 1;
    let width = matrix[0].length -1;
    let xCoordinate = 0;
    let yCoordinate = 0;
    let visited = {};
    let directions = [ [-1,0], [1,0], [0,-1], [0,1] ];
    let output;

    // find the location where to start recursively calling dfs
    // start point is defined as the 
    // location of the first char in the input word
    for (let x = 0; x < height; x++){
        for (let y = 0; y < width; y++){
            if (matrix[x][y] === word[0]){
                xCoordinate = x;
                yCoordinate = y;
            }
        }
    }
    // Stop recursion when..
    // next letter is already visited
    // next spot is oob
    // next spot is last letter in the word
        // return true
    const traverse = (m, n, word, index) => {
        let key = m + '_' + n;
        // already visited 
        if (visited[key]){
            return 
        } 
        if ( m < 0 || n < 0 || m > height || n > height){
            return
        }
        if (matrix[m][n] === word[word.length-1] && index === word.length-1){
            output = true
        }
        if (matrix[m][n] === word[index] ){
            visited[key] = true;
            for (let dir of directions){
                let newM = m + dir[0];
                let newN = n + dir[1];
                traverse(newM, newN, word, index + 1)
            }
        }
    }
    traverse(xCoordinate, yCoordinate, word, 0)
    return output === undefined ? false : output;
}

const input = [["A","B","C","E"],
               ["S","F","C","S"],
               ["A","D","E","E"]];

const word = "ABCCED";

console.log(wordSearchX2(input, word)) // true;

const input2 = [['t', 'a', 'c', 'd'],
['e', 'f', 'g', 'h'],
['i', 'd', 'o', 'j'],
['k', 'l', 'm', 'n']];

const word2 = '1123132134';
console.log(wordSearchX2(input2, word2 )) //  false



