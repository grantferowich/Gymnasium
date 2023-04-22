/*
 * Number of Ones
 *
 * *Given a sorted bit array (values of either 0 or 1), determine the number of 1's in the array.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Output: {Integer}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8`
 * `[0, 0, 0] --> 0`
 * `[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7`
 * 
 * binary search
 * look for a 1 
 * when then one has been found 
 * return the length of the array less the index of the 1
 */

const numberOfOnes = (arr) => {

    let leftPtrInt = 0
    let rightPtrInt = arr.length

    while (leftPtrInt < rightPtrInt){
        let midPtrInt = Math.floor((rightPtrInt - leftPtrInt)/2) + leftPtrInt

        console.log(`midPtrInt ${midPtrInt}; leftPtrInt ${leftPtrInt}; rightPtrInt ${rightPtrInt}`)
        console.log(`arr[midPtrInt] ${arr[midPtrInt]}`)

        if (arr[midPtrInt] === 1){
            while (arr[midPtrInt - 1] > 0 && arr[midPtrInt] === 1){
                midPtrInt--
            }
            return arr.length - midPtrInt
        }
        if (arr[midPtrInt] < 1){
            leftPtrInt = midPtrInt + 1
        } else {
            rightPtrInt = midPtrInt - 1
        }
        
        
    }

    return 0
}

/* TESTS */
const data1 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
const data2 = [0, 0, 0]
const data3 = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] 

const result1 = numberOfOnes(data1)
const result2 = numberOfOnes(data2)
const result3 = numberOfOnes(data3)

console.log(`Result 1: ${result1}`)
console.log(`Result 2: ${result2}`)
console.log(`Result 3: ${result3}`)