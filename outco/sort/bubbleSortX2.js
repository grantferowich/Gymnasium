/* 
*  Problem 3: Bubble Sort
*
*  Started engineering on May 31, 2023 at 7:03 a.m.
*  Successfully tested the function on May 31, 2023 at 7:27 a.m.
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


Set the swap variable to true outside the loop.

Set the swap varaible to false inside the loop.

Loop while the swap variable is true.

When swapping, set the swap flag to true. 

A true swap flag indicates there must be another pass
through the array to sort the array.

As soon as there is a pass through the array without a 
swap the swapped flag will be false and the outer while
loop will terminate. 

*/

const bubbleSort = (arr = []) => {
    if (arr.length === 0){
        return []
    }
    let swappedToF = true;

    while (swappedToF){
        swappedToF = false; 

        let ptrInt = 0;
        let endPtrInt = arr.length;

        // take n steps through
        while (ptrInt < endPtrInt){
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
        endPtrInt--;
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
const result4Arr = bubbleSort(arr4)

console.log(`Result 1: ${result1Arr}`);
console.log(`Result 2: ${result2Arr}`);
console.log(`Result 3: ${result3Arr}`);
console.log(`Result 4: ${result4Arr}`)
/* Test results 

Result 1: 1,3,4,7,9
Result 2: 5,8,13,23
Result 3: 2,34,36,55
Result 4: 

*/