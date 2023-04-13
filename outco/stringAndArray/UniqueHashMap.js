/*
 * Utilize the frequency count pattern to solve these problems.  Use a Hash Set
 * or an Array instead of a Hash Table where applicable.
 *
 * Unique Hash Map
 *
 * Given an array of integers, return an array with all duplicates removed.*
 *
 * Parameters
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints:
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
 * [1, 1, 2, 2, 3, 3]' --> [1, 2, 3]
 * [1, 2, 3, 1, 2] --> [1, 2, 3]
 */

'use strict';

// init array
// Only in cases where an array does not include an element
// append the element to array
// return array
// Time Complexity: O(N)
// Space Complexity: O(N)
// Auxiliary Complexity: O(N + 1) 
// Space Complexity == Auxiliary Complexity + Input Space Complexity
const uniqueHashMap = (arr) => {
  let uniqueHashMap = {}
  let outputArr = []
  for (let xInt = 0; xInt < arr.length; xInt++){
    let elementInt = arr[xInt]
    uniqueHashMap[elementInt] = uniqueHashMap[elementInt] + 1 || 1
  }

  let keysArr = Object.keys(uniqueHashMap)
  let xInt = 0
  while (xInt < keysArr.length){
    let elementInt = keysArr[xInt]
    outputArr.push(elementInt)
    xInt++
  }
  return outputArr;
}

/* TESTS */
const arr1 = [1, 2, 4, 4, 5, 6]  // --> [1, 2, 4, 5, 6]
const resultArr1 = uniqueHashMap(arr1)
console.log(`Result 1: ${resultArr1}`)

const arr2 = [1, 1, 2, 2, 3, 3]  // --> [1, 2, 3]
const resultArr2 = uniqueHashMap(arr2)
console.log(`Result 2: ${resultArr2}`)

const arr3 = [1, 2, 3, 1, 2] //  --> [1, 2, 3]
const resultArr3 = uniqueHashMap(arr3)
console.log(`Result 3: ${resultArr3}`)