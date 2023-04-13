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
* [1, 1, 2, 2, 3, 3] --> [1, 2, 3]
* [1, 2, 3, 1, 2] --> [1, 2, 3]

// loop over elements
// if the index of the element is -1 
// do nothing
// if the index of the element is greater than -1 
// evict the element

// O(1) aux space
// O(N) run time
// checking the index of a value is O(1) 

*/

const unique = (arr) => {
    let xInt = 0
    while (xInt < arr.length){
        let element = arr[xInt];
        if (arr.indexOf(element) < xInt){
            
            console.log('evict loc: ', xInt);
            arr.splice(xInt, 1);
            xInt--
        }
        xInt++
    }
    return arr
}

/* TESTS */

const arr1 = [1, 2, 4, 4, 5, 6] // --> [1, 2, 4, 5, 6]
const output1 = unique(arr1)
console.log(`Output 1: ${output1}`)

const arr2 = [1, 1, 2, 2, 3, 3] // --> [1, 2, 3]
const output2 = unique(arr2)
console.log(`Output 2: ${output2}`)


const arr3 = [1, 2, 3, 1, 2]  // --> [1, 2, 3]
const output3 = unique(arr3)
console.log(`Output 3: ${output3}`)

