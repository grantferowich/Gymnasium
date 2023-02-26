/* 
PASCAL'S TRIANGLE

Successfully tested the function 2/23/23.

*/

const pascalsTriangle = (k) => {
    let output = []
    for ( let i = 0; i < k; i++){
        let row = [];
        // build sub arrays
        for (let j = 0; j <= i; j++){
            // 1's as bookends
            if (j === 0 || j === i){
                row.push(1)
            } else {
                // each element value given by [x - 1] + [x] 
                row.push(output[i-1][j-1] + output[i-1][j])
            }
        }
        output.push(row)
    }
    return output
}

/* TESTS */

const k = 0
const result = pascalsTriangle(0)
console.log(result) // []

const k1 = 1
const result1 = pascalsTriangle(k1)
console.log(result1)  // [[1]]

const k3 = 2
const result3 = pascalsTriangle(k3)
console.log(result3)  // [[1], [1,1]]

const k4 = 4
const result4 = pascalsTriangle(k4)
console.log(result4)  // [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ] ]