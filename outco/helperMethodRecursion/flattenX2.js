/*
 * 2e. Flatten a nested array
 *
 * 
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
 * 
 * loop over each array element
 * if the type of the element is an array recursively call the function
 * if the element is a value push the value to the output array
 */

const flatten = (arr) => {
    let outputArr = []
    const traverse = (arr, depth) => {
        if (depth >= arr.length){
            return 
        }

        if (Array.isArray(arr[depth])){
            traverse(arr[depth], 0)
        } else {
            outputArr.push(arr[depth])
        }
        traverse(arr, depth+1)
    }

    traverse(arr, 0)
    return outputArr
}

/* TESTS */
const arr1 = [1, [2, 3, [4]], 5, [[6]]]
const arr2 = [1,[1], [2,3], 5, [8, 13]]

const result1Arr = flatten(arr1)
const result2Arr = flatten(arr2)

console.log(`Result 1: ${result1Arr}`)
console.log(`Result 2: ${result2Arr}`)

/* TEST RESULTS

Result 1: 1,2,3,4,5,6
Result 2: 1,1,2,3,5,8,13

*/