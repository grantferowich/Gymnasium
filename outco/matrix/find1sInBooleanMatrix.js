/* 
FIND THE NUMBER OF 1s IN A MATRIX OF 1s and 0s

input: m by n matrix
output: number 

//base cases
out of bounds
arrived at the bottom right corner 

*/
const find1sMatrix = (matrix) => {
    let output = 0;
    let height = matrix.length;
    let width = matrix[0].length;

    for (let x = 0; x < height; x++){
        for (let y = 0; y < width; y++){
            if (matrix[x][y] === 1){
                output++
            }
        }
    }
    return output
}

console.log(find1sMatrix([[0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1],
    [0, 1, 1, 1]]))

// Output: 9

console.log(find1sMatrix([[0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 0]]))

// output: 6
