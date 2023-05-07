/* 11. Container With Most Water


Successfully tested the function May 07, 2023.
Medium

Complexity analysis: 
Time: O(N)
Space: O(1)

You are given an integer array height of length n. 
There are n vertical lines drawn such that the two 
endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

input: [ 1, 8, 6, 2, 5, 4, 8, 3, 7 ]
output: 49
why? 

The highest value the right side of the container can reach is 7, 
The highest val the left side of the container can reach is 8
The height of the container is 7
The width of the container is 8 - 1 = 7
7 times 7 is 49

input: [ 2 , 2 ]
output: 2
The highest val the right side can reach is 2
The highest val the left side can reach is 2
The width of the container is 1

input: [ 2, 3, 4, 5, 4, 3, 2 ] 
output: 12
The highest value the right side can reach is 2
The highest value the left side can reach is 2 
The width is 6

Initialize two pointers at the distal ends of the array.
Initialize areaInt and outputInt state variables.
Initialize a variable for the heightInt: set as the lower of the two values given from the pointers.
Initialize a variable for the widthInt: set as the difference between the values given by the positions of the pointers. 
Calculate the areaInt of the container by multiplying the widthInt and heightInt.
Assign the value of outputInt to the maximum of outputInt or areaInt.
One approach is to move both of the pointers toward each other.
Another approach is the move the smaller of the two pointers.

*/

const containerWithMostWater = (arr) => {

    let leftPtrInt = 0;
    let rightPtrInt = arr.length - 1;
    let areaInt = -Infinity;
    let outputInt = -Infinity;

    while (leftPtrInt < rightPtrInt){
        let heightInt = Math.min(arr[leftPtrInt], arr[rightPtrInt]);
        let widthInt = rightPtrInt - leftPtrInt
        areaInt = heightInt * widthInt
        if (arr[leftPtrInt] <= arr[rightPtrInt]){
            leftPtrInt++
        } else {
            rightPtrInt--
        } 
        outputInt = Math.max(areaInt, outputInt)
    }

    return outputInt;
}

/* Test */

const arr1 = [ 1, 8, 6, 2, 5, 4, 8, 3, 7 ];
const arr2 = [ 2 , 2 ];
const arr3 = [ 2, 3, 4, 5, 4, 3, 2 ];

const output1Int = containerWithMostWater(arr1)
const output2Int = containerWithMostWater(arr2)
const output3Int = containerWithMostWater(arr3)

console.log(`Result 1: ${output1Int}`)
console.log(`Result 2: ${output2Int}`)
console.log(`Result 3: ${output3Int}`)

/* Test Result 

Result 1: 49
Result 2: 2
Result 3: 12

*/