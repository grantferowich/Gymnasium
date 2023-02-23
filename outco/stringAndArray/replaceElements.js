/* 
REPLACE ELEMTNS WITH GREATEST ELEMENT ON RIGHT SIDE

Time: O(N)
Space: O(N)
There is *likely* a way to return the correct output with constant space.
I will implement the linear space solution first, then ask "can we do better?" when looking back.

Given an array arr, replace every element in that array 
with the greatest element among the elements to its right, 
and replace the last element with -1.

After doing so, return the array.

input: [ 17, 18, 5, 4, 6, 1]
output: [18, 6, 6, 6, 1, -1]

Loop from left to right. 
Maintain localMax var.
At index 5, there is no element to the right which is greater, so -1
At index 4, localMax becomes 1, the only element to the right.
At index 3, localMax is 6, since 6 is greater than 1.
At index 2, localMax is still 6, since 6 is greater than 4.
At index 1, localMax is still 6, since 6 is greater than 5. 
At index 0, localMax is 18, since 18 is greater than 6. 

At each location x, check if the element at x+1 is greater than localMax
    -> if the element at x+1 is greater than localMax
    -> then set localMax to the higher value
    -> and update the value at x to be localMax

Special Cases: At the last index, there are no elements to the right, so default to -1.
At the second to last index, the element at the last index is greater than 
*/

// O(N) space, O(N) time

const replaceElements = (arr = []) => {
    const output = [-1]
    let x = arr.length - 2;
    let localMax = -Infinity;
    while ( x >= 0 ){
        localMax = Math.max(localMax, arr[x+1])
        output.unshift(localMax)
        x--
    }
    return output;
}

let arrU = undefined
let resultU = replaceElements(arrU)
console.log('result with undefined input', resultU)

let arr = [17,18,5,4,6,1]
let result = replaceElements(arr)
console.log('result', result) // [18, 6, 6, 6, 1, -1]
