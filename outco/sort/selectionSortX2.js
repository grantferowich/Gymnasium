/* *  Problem 2: Selection Sort
 * 
 * Started engineering on May 31, 2023.
 * Successfully tested the function on May 31, 2023. 
 * 
 *  Prompt:    Given an unsorted array of integers, return the array
 *             sorted using selection sort.
 *
 *             What are the time and auxilliary space complexity?
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 * 
 * 
 * Step: Start with some key at 0 which states the first unsorted element in 
 * the array
 * loop from 0 to N - 1, keeping track of the minimum element
 * Swap: when the loop has completed, set the minimum element at the location of the key,
 * which is the first unsorted element in the array
 * 
 * Selection sort basically runs "find minimum" on the array
 * of length N, N-1 times. 
 * Run time: O(N^2)
 * Space: O(1)
 * */

const selectionSort = (arr = []) => {
    if (arr.length === 0){
        return []
    }
    let keyInt = 0;
    let xInt = 0;

    while (keyInt < arr.length){
        xInt = keyInt;
        let minLocationInt;
        let minimumElementInt = Infinity
        while (xInt < arr.length){
            let currentElementInt = arr[xInt];
            if (currentElementInt < minimumElementInt){
                minimumElementInt = currentElementInt
                minLocationInt = xInt
            }
            xInt++
        }
        [arr[keyInt], arr[minLocationInt]] = [arr[minLocationInt], arr[keyInt]]
        keyInt++
    }
    return arr
}

/* Tests */
const arr1 = [ 3, 9, 1, 4, 7]
const arr2 = [ 23, 13, 8, 5]
const arr3 = [ 34, 55,  36, 2]
const arr4 = []

const result1Arr = selectionSort(arr1)
const result2Arr = selectionSort(arr2)
const result3Arr = selectionSort(arr3)

console.log(`Result 1: ${result1Arr}`);
console.log(`Result 2: ${result2Arr}`);
console.log(`Result 3: ${result3Arr}`);

/* Test results 

Result 1: 1,3,4,7,9
Result 2: 5,8,13,23
Result 3: 2,34,36,55

*/