/*
 * 2d. Given an array of integers, create an array of two-item arrays
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 */

const arrayPairs = (arr) => {
    let outputArr = []
    
    const createPair = (depth) => {
        if (depth > arr.length -1){
            return
        }
        let newPairArr = [arr[depth], arr[depth + 1]]
        outputArr.push(newPairArr)
        createPair(depth+2)
    }
    
    createPair(0)
    return outputArr
}

/* TESTS */
const arr1 = [ 1, 2, 3, 4, 5, 6]
const arr2 = [1, 2, 3, 4, 5]

const result1 = arrayPairs(arr1)
const result2 = arrayPairs(arr2)

console.log(`Result 1: ${result1}`)
console.log(`Result 2: ${result2}`)

/* TEST RESULTS


*/