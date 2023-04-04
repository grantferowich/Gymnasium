/* 
Longest Consecutive Sequence

Medium

Partially tested as of 04/04/2023.

Given an unsorted array of integers nums, 
return the length of the longest consecutive elements sequence.

Approach:
find the min
find the max
loop from min to max 
keep track of the number of consecutive elements
if the number of consecutive elements exceeds the previous longest number of consecutive
update the number of consecutive elements 

*/

const longestConsecutive = (numsArr) => {
    if (numsArr.length === 0){
        return 0
    }
    let minInt = Infinity
    let maxInt = -Infinity
    let xInt = 0
    let maxConsecutive = 1;
    let tempConsecutive = 1;
    let numsMap = new Map()
    // get minInt and maxInt of arr
    while (xInt < numsArr.length){
        minInt = Math.min(minInt, numsArr[xInt])
        maxInt = Math.max(maxInt, numsArr[xInt])
        numsMap.set(numsArr[xInt], true)
        xInt++
    }
    // console.log(`minInt ${minInt} maxInt ${maxInt}`)
    // loop from the min to the max 
    xInt = minInt
    while (xInt < numsArr.length){
        
        if (numsMap.has(numsArr[xInt]) && numsMap.has(numsArr[xInt] + 1)){
            tempConsecutive++
        }
        if (!numsMap.has(numsArr[xInt+1])){
            tempConsecutive = 1
        }
        if (tempConsecutive > maxConsecutive){
            maxConsecutive = tempConsecutive
        }
        xInt++
    }
    return maxConsecutive
}

/* TESTS */

const numsArr1 = [100,4,200,1,3,2];
const result1 = longestConsecutive(numsArr1)
console.log(`Result 1: ${result1}`)

const numsArr2 = [0,3,7,2,5,8,4,6,0,1]
const result2 = longestConsecutive(numsArr2)
console.log(`Result 2: ${result2}`)

const numsArr3 = [0,3,7,2,5,8,4,6,0,1]
const result3 = longestConsecutive(numsArr3)
console.log(`Result 3: ${result3}`)

const numsArr4 = [0,1,2,4,8,5,6,7,9,3,55,88,77,99,999999999]
const result4 = longestConsecutive(numsArr4)
console.log(`Result 4: ${result4}`)

const numsArr5 = [-1000000000,1,2,3,9,1000000000]
const result5 = longestConsecutive(numsArr5)
console.log(`Result 5: ${result5}`)


/* Alternative implementation courtesy ChatGPT */
const longestConsecutive2 = (nums) => {
    if (nums.length === 0) {
        return 0;
    }
    const numSet = new Set(nums);
    let maxConsecutive = 1;
    for (const num of numSet) {
        if (!numSet.has(num - 1)) { // only start counting from the smallest number in a consecutive sequence
            let tempConsecutive = 1;
            let currentNum = num;
            while (numSet.has(currentNum + 1)) { // count consecutive numbers in sequence
                tempConsecutive++;
                currentNum++;
            }
            maxConsecutive = Math.max(maxConsecutive, tempConsecutive);
        }
    }
    return maxConsecutive;
};
