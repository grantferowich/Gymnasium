/* 

Insertion Sort

Started developing the function on Thursday, May 25, 2023.
Successfully tested the function on Thursday, May 25, 2023.

Insertion sort is an algorithm for converting 
an unsorted array into a sorted array.

Procedure
Initialize the ptrInt, which must traverse over the entire array.
There are O(N) steps for the ptrInt to travel.
At each step, there are up to O(N) pairwise swaps which must be performed.

Time complexity: 
O(N^2)
Space complexity: 
O(1)


Only swap when the value at arr[x-1] > arr[x]

     x              x = 1,  x-1 = 0, 5 > 2, swap

[ 5, 2, 4, 6, 1, 3 ] => [ 2, 5, 4, 6, 1, 3 ]

        x           x = 2, x - 1 = 1, arr[x-1] > arr[x], swap
[ 2, 5, 4, 6, 1, 3 ] => [ 2, 4, 5, 6, 1, 3]

           x        x = 3, x-1 = 2, arr[x-1] < arr[x], no swap
[ 2, 4, 5, 6, 1, 3] => [ 2, 4, 5, 6, 1, 3]

              x     x = 4, x-1 = 3, arr[x-1] > arr[x], swap || swap when:
                                                             x = 4, x - 1 = 3; 
                                                            x = 3, x - 1 = 2;
[ 2, 4, 5, 6, 1, 3] => [  ]


[ 5, 2, 4, 6, 1, 3 ]

*/

const insertionSort = (arr) => {
    let xInt = 1;
    // step through the array
    while (xInt < arr.length){
        let yInt = xInt;
        // whenever the value at y is greater than the value at y - 1
        // swap
        while (yInt > 0 && arr[yInt] < arr[yInt-1]){
            [arr[yInt - 1], arr[yInt]] = [ arr[yInt], arr[yInt -1] ]
            yInt--
        }
        xInt++
    }   
    return arr;

}

/* Tests */

let arr1 = [3, 5, 8, 1, 13];
let arr2 = [5, 2, 9, 1, 3];

const resultArr1 = insertionSort(arr1);
const resultArr2 = insertionSort(arr2)

console.log(`Result 1: ${resultArr1}`);
console.log(`Result 2: ${resultArr2}`);

/* Test results 

Result 1: 1,3,5,8,13
Result 2: 1,2,3,5,9

*/
