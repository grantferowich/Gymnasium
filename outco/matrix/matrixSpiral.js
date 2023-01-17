/* 
Matrix Spiral
input: an array of arrays
output: an array
Constraints: O(MN) runtime
O(MN) aux space

*/

const matrixSpiral = (matrix) => {
    if (!matrix.length) { return [];}

    let yMin = 0;
    let xMin = 0;
    let yMax = matrix.length - 1;
    let xMax = matrix[0].length;
    let result = [];

    while (xMin <= xMax && yMin <= yMax){
        //traverse from right to left across the columns
        for (let x = xMin; x <= xMax; x++){
            result.push(matrix[yMin][x]);
        }
        yMin++;
        // traverse from top to bottom, down the rows
        for (let x = yMin; x <= yMax; x++){
            result.push(matrix[x][xMax]);
        }
        xMax--;

        if (yMin <= yMax){
            for (x = xMax; x >= xMin; x--){
                result.push(matrix[yMax][x])
            }
            yMax--;
        }

        if (xMin <= xMax){
            for (x = yMax; x >= yMin; x--){
                result.push(matrix[x][xMin])
            }
            xMin++;
        }
        return result;
    }
}

let matrix = [[1,2,3],			
[4,5,6],
[7,8,9]]
console.log(matrixSpiral(matrix))