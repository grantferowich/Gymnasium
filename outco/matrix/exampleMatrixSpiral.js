//Javascript Solution
function MatrixSpiral(matrix) {
    if(!matrix.length) {return []; }
    var yMin = 0;
    var xMin = 0;
    var yMax = matrix.length - 1;
    var xMax = matrix[0].length - 1;
    var results = [];

    while (xMin <= xMax && yMin <= yMax) {
        for(var i = xMin; i <= xMax; i++){
            results.push(matrix[yMin][i]);
        }
        yMin++;
        for(i = yMin; i <= yMax; i++){
            results.push(matrix[i][xMax]);
        }
        xMax--;
        if(yMin <= yMax){
            for(i = xMax; i >= xMin; i--){
                results.push(matrix[yMax][i]);
            }
            yMax--;
        }
        if(xMin <= xMax){
            for(i = yMax; i >= yMin; i--){
                results.push(matrix[i][xMin]);
            }
            xMin++;
        }
    }
    return results;
};

let matrix = [[1,2,3],			
[4,5,6],
[7,8,9]]

console.log(MatrixSpiral(matrix))