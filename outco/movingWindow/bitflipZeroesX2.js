/*
Bit Flip

Attempted on May 17, 2023.


Given a binary array, find the maximum number of zeros 
in an array with one flip of a subarray allowed. 
A flip operation switches all 0s to 1s and 1s to 0s.

Examples:

Input :  arr[] = {0, 1, 0, 0, 1, 1, 0}
Output : 6
We can get 6 zeros by flipping the subarray {4, 5}


Input :  arr[] = {0, 0, 0, 1, 0, 1}
Output : 5

*       input = [0, 1, 0, 0, 1, 1, 0]
*       output: 5
        -> flip arr[4], arr[5]
*
*       input = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
*       output: 10
        -> flip arr[0], arr[1], arr[2]
*       
*       input = [0, 0, 0, 1, 0, 1]\
*       output: 5
        -> flip arr[3]
*
*       input = [0,0,0,0]
*       output: 4
*       
*       input = []

    count up longest string of 1s
    append count of longest string of 1s
    start counting from the first 0 through the longest string of ones 
    when the first 1 is reached stop the count 

    Initial sketch w/o any support:
    initialize leftPtrInt and rightPtrInt
    initialize the maximumOnesInt
    Expand while the number at the rightPtrInt is not 1
    When a 1 is found keep track of whether the window is still valid
    if there is a 0 between any two ones the window stops being valid
        How does the function keep track of whether the window is valid 
    set maximumOnesInt as the maximum of maximumOnesInt and rightPtrInt - leftPtrInt while the window is valid
    

*/

const bitflipZeroes = (arr) => {

    let leftPtrInt = 0;
    let rightPtrInt = 0;

    while (rightPtrInt < arr.length){

        if (arr[rightPtrInt] === 1){
            
        }
        rightPtrInt++
    }

}

/* Tests */

const arr1 = [0, 1, 0, 0, 1, 1, 0];
const arr2 = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
const arr3 = [0, 0, 0, 1, 0, 1];
const arr4 = [0, 0, 0, 0];
const arr5 = [0, 1, 1, 0, ]

/* Test results */