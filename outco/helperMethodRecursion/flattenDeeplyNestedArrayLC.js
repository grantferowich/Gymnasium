/* 

2625. Flatten Deeply Nested Array

Medium

Successfully tested the function April 29, 2023.

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method. */

const flat = (arr, n) => {
    let outputArr = []
    const traverse = (arr, depth) =>{
        let xInt = 0
        while (xInt < arr.length){
            let element = arr[xInt]

            if (Array.isArray(element) && depth < n){
                traverse(element, depth +1 )
            } else {
                outputArr.push(element)
            }
            xInt++
        }
        
    }
    traverse(arr, 0)
    return outputArr
};

/* TESTS */
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const n1Int = 0

const arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const n2Int = 1

const arr3 =[[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const n3Int = 2

const result1Arr = flat(arr1, n1Int)
const result2Arr = flat(arr2, n2Int)
const result3Arr = flat(arr3, n3Int)

console.log(`Result 1: ${result1Arr}`)
console.log(`Result 2: ${result2Arr}`)
console.log(`Result 3: ${result3Arr}`)

/* TEST RESULSTS

Result 1: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
Result 2: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
Result 3: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

*/