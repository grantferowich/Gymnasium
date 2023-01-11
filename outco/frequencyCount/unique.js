/*
 * Utilize the frequency count pattern to solve these problems.  Use a Hash Set
 * or an Array instead of a Hash Table where applicable.
 *
 * Unique
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

// Successfully tested the solution on 12/10/22.

function unique(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++){
    if (!array.includes(arr[i])){
      array.push(arr[i]);
    }
  }
  return array;
}

console.log(unique([1,1,2,2,3,3,4])) // [1,2,3,4]