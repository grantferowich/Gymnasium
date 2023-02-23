/*
 * ## Square Root
 *
 * *Given an positive integer, find the square root.*
 *
 * **Parameters**
 * Input: value {Integer}
 * Output: {Float}
 *
 * **Constraints**
 * Do not use a native built in method.
 * Ensure the result is accurate to 6 decimal places (0.000001)
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `4 --> 2.0`
 * `98 --> 9.899495`
 * `14856 --> 121.885192
 * 
 * 
 * // input: 49, 81, 9
 * // output: 7, 9, 3
 * 
 *  [0.000001,1,2,3....49]
 *  24 * 24 = 576 > 49 ||| Case 1: product is greater than N
 * [0.000001, 1, 2, 3, 4....24]
 * 12 * 12 = 144 | Case 1
 * [0.000001, 1, 2, 3...12]
 * 6 * 6 = 36 | Case 2: product is less than N 
 * [6.000001, 7, 8, 9, 10, 11, 12]
 * 9 * 9 = 81 | Case 1: product is greater than N 
 * [6.000001, 7, 8, 9]
 * 
 *
 * Constraints: the solution must have O(logN) runtime
 * Edge cases: is the number is positive? 
 * E: if the number is negative return 0
 * E: is the input a number?
 * E: check to ensure type of input is number
 * 
 * // from 0.000001 to N 
 * check if the number at the midIdx times itself equals N
 * if the product is less than N set set startIdx to midIdx + 0.000001
 * else set the endIdx to midIdx - 0.0000001
 * if the number at midIdx * the number at midIdx === inputNumber return the value4rt
 * 
 */

const squareRoot = (N) => {
    if (N === 1 || N ===0){ return N};
    let startIdx = 0;
    let endIdx = N;
    let midIdx = 0;
    let result = 0;
    let square = 0;

    while (startIdx <= endIdx){
        midIdx = startIdx+ (endIdx - startIdx)/2;
        square = midIdx * midIdx;
        if (square == N){
            return mid;
        }
        if (square < N){
            startIdx = midIdx + 0.000001;
            result = midIdx;
        } else {
            endIdx = midIdx - 0.000001; 
        }
    }
    return result.toFixed(6)
}

console.log(squareRoot(81.000000)) // 9
console.log(squareRoot(14856)) // 121.885192 // outputting 121.885191
console.log(squareRoot(98)) // 9.899495