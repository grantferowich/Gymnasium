/* 
Sub Sort
CTCI 16.16
Successfully tested the solution on July 18, 2023. 
Given an array of integers, write a method to find indices m 
and n such that if you sorted elements m through n, the e
entire array would be sorted. Minimize n - m
(that is, find the smallest such sequence.)

Input 1
const arr = [ 1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

output: [ 3, 9]
At [ 3, 9 ] you could sort the elements in between 
arr[3] and arr[9] and the entire array would be sorted.

Input 2
const arr = [ 1, 1, 2, 3,      5, 13, 21, 34,]

What is the pause condition? The number at arr[iInt] and 
the number at arr[jInt] are equal, or, the element at arr[iInt]
is greater than the element at arr[jInt].

1. Apply the two pointer technique
    -> specifically, initialize the two pointers at
    the first and last indices of the array
2. If the element at the front index is less than the element at the back index,
then move both pointers.
3. If the element at the front index is greater
than or equal to the number at the back index,
then pause and return those numbers. 

*/

const subSort = (arr) => {
    let iInt = 0;
    let jInt = arr.length - 1;
    while (iInt < jInt){
        if ( arr[iInt] >= arr[jInt]){
            return [iInt, jInt]
        }   
        iInt++
        jInt--
    }
    return -1
}

/* Test */
const arr = [ 1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];

const resultTuple1 = subSort(arr);

console.log('Result 1:', resultTuple1); // expect [ 3, 9 ]

/* Test results */