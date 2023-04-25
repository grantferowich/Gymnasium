/*
 * ## Closest Value
 *
 * *Given a sorted bit array of integers, and a target value, find the number in the array that is closest to the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * If there are two numbers tied for the closest value, return the lowest value.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 6 --> 5`
 * `[1, 2, 3], 8 --> 3`
 * `[1, 10, 22, 59, 67, 72, 100], 70 --> 72`'
 * 
 * look at the middle number
 * store the difference between the middle number and the target number as differenceInt
 * if the present differenceInt is smaller than the ultimateDifferenceInt update ultimateDifferenceInt and closestInt
 * if the middle number is greater than or equal to the target, reset leftPtrInt
 * if the middle number is less than the target, reset rightPtrInt
 */

const closestValue = (arr, targetInt) => {
    let leftPtrInt = 0  
    let rightPtrInt = arr.length - 1
    let localDifferenceInt  = Infinity
    let ultimateDifferenceInt = Infinity
    let closestInt = Infinity
    let differenceHashMap = new Map()
    let outputArr = []

    while (leftPtrInt < rightPtrInt){
        let midPtrInt = parseInt((rightPtrInt + leftPtrInt)/2)
        localDifferenceInt = Math.abs(targetInt - arr[midPtrInt])
        
        if (localDifferenceInt <= ultimateDifferenceInt){
            ultimateDifferenceInt = localDifferenceInt
            closestInt = arr[midPtrInt]
            differenceHashMap.set(arr[midPtrInt], closestInt)
        }
        
        if (targetInt <= arr[midPtrInt]){
            rightPtrInt = midPtrInt - 1
            
        } 
        if (targetInt > arr[midPtrInt]){
            leftPtrInt = midPtrInt + 1
        }
        
    }

    // console.log(ultimateDifferenceInt)
    for (let [key, value] of differenceHashMap){
        if (value === ultimateDifferenceInt){
            outputArr.push([key])
        } 
    }
    // console.log(outputArr)
    return closestInt
}

/* TESTS */
const dataArr1 = [1, 2, 3, 5, 5, 7, 9, 10, 11]
const targetInt1 = 6
const dataArr2 = [1, 2, 3]
const targetInt2 = 8
const dataArr3 = [1, 10, 22, 59, 67, 72, 100]
const targetInt3 = 70

const result1 = closestValue(dataArr1, targetInt1)
const result2 = closestValue(dataArr2, targetInt2)
const result3 = closestValue(dataArr3, targetInt3)

console.log(`Result 1: ${result1}`)
console.log(`Result 2: ${result2}`)
console.log(`Result 3: ${result3}`)