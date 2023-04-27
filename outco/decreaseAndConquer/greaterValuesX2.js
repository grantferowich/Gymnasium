/*
 * ## Greater Values
 *
 * *Given a sorted array of integers, and a target value return the number of values greater the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 5 --> 4`
 * `[1, 2, 3], 4 --> 0`
 * `[1, 10, 22, 59, 67, 72, 100], 13 --> 5`
 *
 * 
 * init leftPtrInt and rightPtrInt
 * init midPtrInt 
 * if the array[midPtrInt] is less than the target
 * AND if the array[midPtrInt + 1] is greater than the target
 * then return array.length - midPtr
 * 
 */

const greaterValues = (arr, targetInt) => {
    let leftPtrInt = 0;
    let rightPtrInt = arr.length - 1;
    while (leftPtrInt < rightPtrInt){
        let midPtrInt = parseInt((leftPtrInt + rightPtrInt)/2)
        if (targetInt >= arr[midPtrInt] && arr[midPtrInt + 1] > targetInt){  
            return arr.length - midPtrInt - 1 
        }
        if (targetInt > arr[midPtrInt]){
            leftPtrInt = midPtrInt + 1
        } else {
            rightPtrInt = midPtrInt - 1
        }
    }

    return 0
}

/* TESTS */
const arr1 = [1, 2, 3, 5, 5, 7, 9, 10, 11];
const targetInt1 = 5;
const arr2 = [1, 2, 3];
const targetInt2 = 4;
const arr3 = [1, 10, 22, 59, 67, 72, 100];
const targetInt3 = 13;

const resultInt1 = greaterValues(arr1, targetInt1)
const resultInt2 = greaterValues(arr2, targetInt2)
const resultInt3 = greaterValues(arr3, targetInt3)

console.log(`Result 1: ${resultInt1}`)
console.log(`Result 2: ${resultInt2}`)
console.log(`Result 3: ${resultInt3}`)

/* TEST RESULTS 

Result 1: 4
Result 2: 0
Result 3: 5

*/