/*
 * ## Square Root
 *
 * *Given an positive integer, find the square root.*
 *
 * Successfully tested the function April 26, 2023. 
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
 * init state vars at 0 and the int
 * calculate the midpoint between 0 and the int
 * check if the midpoint times the midpoint is equal to int 
 * if yes, return the midpointInt 
 * 
 * 
 * 
 */

const squareRoot = (int) => {
    if (int === 0 || int === 1){
        return int
    }

    let leftInt = 0
    let rightInt = int

    if (int < 0){
        return 'The square root of a negative number does not exist.'
    }

    while (leftInt < rightInt){
        let midInt = ((leftInt + rightInt)/2)
        let squareInt = midInt * midInt

        if (squareInt === int){
            return midInt.toFixed(6)
        }

        if (squareInt > int){
            rightInt = midInt + 0.000001
        } else {
            leftInt = midInt - 0.000001
        }   
        
    }
}


/* TESTS */
const int1 = 4
const int2 = 98
const int3 = 14856
const int4 = -4
const int5 = 0
const int6 = 1

const result1Int = squareRoot(int1)
const result2Int = squareRoot(int2)
const result3Int = squareRoot(int3)
const result4Int = squareRoot(int4)
const result5Int = squareRoot(int5)
const result6Int = squareRoot(int6)

console.log(`Result 1: ${result1Int}`)
console.log(`Result 2: ${result2Int}`)
console.log(`Result 3: ${result3Int}`)
console.log(`Result 4: ${result4Int}`)
console.log(`Result 5: ${result5Int}`)
console.log(`Result 6: ${result6Int}`)

/* TEST RESULTS

Result 1: 2.000000
Result 2: 9.899495
Result 3: 121.885192 
Result 4: The square root of a negative number does not exist.
Result 5: 0
Result 6: 1

*/