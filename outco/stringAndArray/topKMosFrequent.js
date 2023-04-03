/* 
347. Top K Most Frequent

Medium

Given an integer array nums and an integer k, 
return the k most frequent elements. You may 
return the answer in any order.

create a frequencyMap<char, integer>
for all the elements in a list
if the element has a frequency of k or higher
push the element to an output array
return the output array


Example 1
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2
Input: nums = [1], k = 1
output: [1]

*/

const topKMostFrequent = (numsArr, kInt) => {
    let xInt = 0
    let charMap = new Map()
    let outputArr = []
    // init char map
    while (xInt < numsArr.length){
        let char = numsArr[xInt]
        if (!charMap.has(char)){
            charMap.set(char, 1)
        } else {
            let freqInt = charMap.get(char)
            charMap.set(char, freqInt + 1)
        }
        xInt++
    }

    // check the frequency of each char in the charMap
    for (let [key, val] of charMap){
        if (charMap.get(key) >= kInt){
            outputArr.push(key)
        }
    }

    return outputArr
}

/* TESTS */

let arr1 = [1,1,1,2,2,3]
let kInt1 = 2
let result1 = topKMostFrequent(arr1, kInt1)
console.log(`Result 1: ${result1}`)
// Result 1: 1,2

let arr2 = [1]
let kInt2 = 1
let result2 = topKMostFrequent(arr2, kInt2)
console.log(`Result 2: ${result2}`)
// Result 2: 1


let arr3 = [1,2,3]
let kInt3 = 1
let result3 = topKMostFrequent(arr3, kInt3)
console.log(`Result 3: ${result3}`)
// Result 3: 1,2,3
