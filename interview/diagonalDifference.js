// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// array = [ [1, 2, 3],
        //   [4, 5, 6],  
        //   [9, 8, 9] ];

// The left-to-right diagonal = 1 + 5 + 9 = 15. 
// The right to left diagonal = 3 + 5 + 9 = 17. 
// Their absolute difference is | 15 - 17 | = 2.

const diagonalDifference = (arr) => {
    let leftDiag = 0;
    let rightDiag = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0 ; j < arr.length; j++){
            if (i == j){ 
                leftDiag += arr[i][j];
            } 
            if ( i + j == (arr.length - 1)){
                rightDiag += arr[i][j];
            }
        }
    }
    console.log('left', leftDiag)
    console.log('right', rightDiag)
    return Math.abs(leftDiag - rightDiag);
};

module.exports = diagonalDifference