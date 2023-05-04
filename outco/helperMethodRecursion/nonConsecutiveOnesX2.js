/* 

Non-consecutive Ones

Attempted on May 3, 2023.

Given a number, nInt, return the number of bit strings
of nInt length that DO NOT contain consecutive 1's.
         (build, depth)
               ""          [0]
            /      \
          0         1       [1] --> add 0 or add 1 at each recursive call
        / \        / \       
       00 01     10   11X     [2] --> if previous char is a 0, add a 0 or a 1

Recursive Cases: 
Add 0 or 1 if and only if the previous number is not a 0

Base Cases: 
if the number of elements in the build === nInt, push the build to the set

// base case: ("", 0)

// recursive case: 
// left 
// build + "0"

// right
// build + "1" 

// increment count if the build does not include "11"

// Input: 2
// Output: ["00", "01", "10"]

// Input: 3
// Output: ["000", "001", "010", "100", "101"] 

*/

const nonConsecutiveOnes = (nInt) => {

    let outputArr = []

    const increase = (buildStr, depthInt) => {
        console.log(`buildtStr ${buildStr}; depthInt ${depthInt}`)
        
        if (depthInt > nInt){
            return
        }

        if (!buildStr.includes('11') && buildStr.length === nInt){ 
            outputArr.push(buildStr)
        }
        
        increase(buildStr + '1', depthInt + 1)
        increase(buildStr + '0', depthInt + 1)
    }

    increase('', 0)
    return outputArr
}

/* Tests */

const n1Int = 2 
const n2Int = 3

const result1Set = nonConsecutiveOnes(n1Int)
const result2Set = nonConsecutiveOnes(n2Int)

console.log(`Result 1: ${result1Set}`)
console.log(`Result 2: ${result2Set}`)

/* Test Results



*/