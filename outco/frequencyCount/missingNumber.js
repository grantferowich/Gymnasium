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

// Succesfully tested the function 1/11/23.

const missingNumber = (n, arr) => {
    let result = [];
    let hash = {};
    let x = 1;
    while (x < n){
        let element = arr[x];
        hash[element] = hash[element] + 1 || 1
        x++
    }

    let y = 1;
    while ( y < n + 1){
        if (!hash[y]){
            result.push(y)
        }
        y++
    }
  
    return result;
  }

//   4, [1, 4, 2] --> [3]
//   8, [4, 7, 1, 6] --> [2, 3, 5, 8]
//   6, [6, 4, 2, 1] --> [3, 5]

console.log(missingNumber(8, [1,1,2,3,5])) // [4, 6, 7, 8]