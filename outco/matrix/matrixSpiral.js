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
    let xMax = matrix[0].length - 1; 
    let result = [];

    while (xMin <= xMax && yMin <= yMax){
        //traverse from xmin to xmax
        for (let x = xMin; x <= xMax; x++){
            result.push(matrix[yMin][x]);
        }
        yMin++;
        // traverse from ymin to ymax
        for (let x = yMin; x <= yMax; x++){
            result.push(matrix[x][xMax]);
        }
        xMax--;
        
        if (yMin <= yMax){
            // traverse from xMax to xMin
            for (x = xMax; x >= xMin; x--){
                result.push(matrix[yMax][x])
            }
            yMax--;
        }

        if (xMin <= xMax){
            // traverse from yMax to yMin
            for (x = yMax; x >= yMin; x--){
                result.push(matrix[x][xMin])
            }
            xMin++;
        }
    }
    return result;
}

let matrix = [[1,2,3],			
[4,5,6],
[7,8,9]]
console.log(matrixSpiral(matrix)) 