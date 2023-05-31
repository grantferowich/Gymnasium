/* 
 *  Homework - Quadratic Sorts
 *
 *  Problem 1: Insertion Sort
 *
 *  Attempted on Thursday May 25, 2023.
 *  Successfully tested the function on May 25, 2023.
 * 
 *  Run time: O(N^2) - quadratic
 *  Space: O(1)
 * Completed function development in <10 minutes.
 * 
 *  Prompt:    Given an unsorted array of integers, return the array sorted
 *             using insertion sort.
 *
 *             What are the time and auxilliary space complexity?
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 *
*/

const insertionSort = (arr) => {
    let xInt = 1;
    // step through array
    while (xInt < arr.length){
        let yInt = xInt;
        // perform up to n pair-wise swaps
        // swap when the previous element is greater than the current element
        while (yInt > 0 && arr[yInt] < arr[yInt - 1]){
            [arr[yInt-1], arr[yInt]] = [ arr[yInt], arr[yInt - 1] ];
            yInt--
        }
        xInt++
    }
    return arr;
}

/* Tests */

const arr1 = [3,9,1,4,7];

const result1Arr = insertionSort(arr1);

console.log(`Result 1: ${result1Arr}`)


/* Test results */