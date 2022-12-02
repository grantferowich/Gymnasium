// Missing Number
//  *
//  * Given range of 1 to N and an array of unique integers that are within that
//  * range, return the missing integers not found in the array
//  *
//  * Parameters
//  * Input: n {Integer}
//  * Input: arr {Array of Integers}
//  * Output: {Array of Integers}
//  *
//  * Constraints
//  * Time: O(N)
//  * Space: O(N)
//  *
//  * Examples
//  * `4, [1, 4, 2] --> [3]`
//  * `8, [4, 7, 1, 6] --> [2, 3, 5, 8]`
//  * `6, [6, 4, 2, 1] --> [3, 5]`
//  */

// loop while i < n
// if the input array does not include i
// append the missing value to a new array
const missingNumber = (n, arr) => {
  let missing = [];
  let array = arr.sort((a,b) => b - a) 
  for ( let i = 1; i <= n; i++){
    if (!array.includes(i)){
      missing.push(i)
    } 
  }
  return missing
}