/*
Successfully tested the function 1/9/23.
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

const uniquesOnly = (array) => {
    let accumulator = [];
    let x = 0;
    while (x < array.length){
        let element = array[x];
        if (accumulator.indexOf(element) === -1){
            accumulator.push(element)
        }
        x++
    }
    return accumulator;
}

console.log(uniquesOnly([1, 2, 3, 1, 2])) // [1,2,3]