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
 * Space: O(1)
 *
 * Examples
 * [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
 * [1, 1, 2, 2, 3, 3]' --> [1, 2, 3]
 * [1, 2, 3, 1, 2] --> [1, 2, 3]
 */

const uniquesOnly = (array) => {
    let x = 0;
    while (x < array.length){
        let element = array[x]
        if (array.slice(0,x-1).indexOf(element) !== -1){
            array.splice(x,1)
        }
        x++
    }
    return array
}

console.log(uniquesOnly([1, 2, 3, 1, 2])) // [1,2,3]