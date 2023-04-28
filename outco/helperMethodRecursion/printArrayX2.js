/*
 * 2a. Print each item in an array in order
 *
 * Successfully tested the function 04/28/23.
 * 
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printArray([1,2,3]) =>
 *          1
 *          2
 *          3
 */

const printArray = (arr) => {
    const printOne = (arr, depth) => {
        if (depth === arr.length){
            return
        }
        console.log(arr[depth])
        printOne(arr, depth + 1)
    }
    printOne(arr, 0)
}

/* TESTS */

const arr1 = [1, 2, 3]

const result1 = printArray(arr1)
// console.log(`Result 1: ${result1}`)