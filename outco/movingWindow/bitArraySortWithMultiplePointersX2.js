/* 
Bit Array Sort With Multiple Pointers

Given a bit array, return the array sorted in place using multiple pointers.

Attempted May 9, 2023.
Successfully tested the function May 9, 2023.

input: array
output: array

Constraints: O(N) space and O(N) runtime


The input space is O(N). The auxiliary space is O(2). 
Therefore the space complexity of the algorithm is linear, O(N).


bitArraySort([1,0,0,1]) // => [0,0,1,1]
bitArraySort([1,0,0,0,0,0,0,0,0,0,0,1]) // => [0,0,0,0,0,0,0,0,0,0,0,1,1] 

1. initialize two pointers at the distal ends of the array.
2. If the value corresponding to the left pointer is a 1, initiate a swap 
3. If the value corresponding to the right is a 0, initiate a swap

*/

const bitArraySort = (arr) => {

    let leftPtrInt = 0;
    let righPtrInt = arr.length - 1;

    while (leftPtrInt < righPtrInt){

        if (arr[leftPtrInt] === 0){
            leftPtrInt++;
        }
        
        if (arr[righPtrInt] === 1){
            righPtrInt--;
        }
      
        if (arr[leftPtrInt] === 1 || arr[righPtrInt] === 0){
            let tempLeftInt = arr[leftPtrInt];
            let tempRightInt = arr[righPtrInt];
            arr[leftPtrInt] = tempRightInt;
            arr[righPtrInt] = tempLeftInt;
        }

    }
    
    return arr
}

/* Test */

const arr1 = [ 1, 0, 0, 1];
const arr2 = [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
const arr3 = [ 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1];

const result1Arr = bitArraySort(arr1);
const result2Arr = bitArraySort(arr2);
const result3Arr = bitArraySort(arr3);

console.log(`Result 1: ${result1Arr}`)
console.log(`Result 2: ${result2Arr}`)
console.log(`Result 3: ${result3Arr}.`)
/* Test results

Result 1: 0,0,1,1
Result 2: 0,0,0,0,0,0,0,0,0,0,1,1

*/