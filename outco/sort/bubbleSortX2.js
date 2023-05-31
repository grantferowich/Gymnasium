/* 
*  Problem 3: Bubble Sort
*
*  Started engineering on May 31, 2023 at 7:03 a.m.
* 
*  Prompt:    Given an unsorted array of integers, return the array
*             sorted using bubble sort.
*
*             What are the time and auxilliary space complexity?
*
*  Input:     input {Array}
*  Output:    {Array}
*
*  Example:   [3,9,1,4,7] --> [1,3,4,7,9]

The array is unsorted. 
Loop from 0 to n-1/
Every time the current element is greater than the next
element, swap the current element and the next element.
The largest element will be set at the n-1 position.
After one loop, look to insert the next largest element
at the n-2 position. And so on, and so forth.

 */

const bubbleSort = (arr) => {

    let swappedToF = true;

    while (swappedToF){
        swappedToF = false; 

        let ptrInt = 0;
        let endPtr = arr.length;

        // take n steps through
        while (ptrInt < endPtr){
            // at each step, check to swap
            if (arr[ptrInt] > arr[ptrInt+1]){
                [arr[ptrInt], arr[ptrInt+1]] = [arr[ptrInt + 1], arr[ptrInt]];
                // base case has not been reached 
                // swapped is still true, so some
                // part of the array was unsorted
                swappedToF = true
            }
            ptrInt++
        }
        // when the arr is sorted properly, swapped will still be 
        // false after completing the inner loop
        // termination
        endPtr--;
    }
    return arr
}

/* Tests */

const arr1 = [ 3, 9, 1, 4, 7]
const arr2 = [ 23, 13, 8, 5]
const arr3 = [ 34, 55,  36, 2]
const arr4 = []

const result1Arr = bubbleSort(arr1)
const result2Arr = bubbleSort(arr2)
const result3Arr = bubbleSort(arr3)

console.log(`Result 1: ${result1Arr}`);
console.log(`Result 2: ${result2Arr}`);
console.log(`Result 3: ${result3Arr}`);

/* Test results */