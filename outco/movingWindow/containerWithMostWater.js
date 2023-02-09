/* 11. Container With Most Water
Successfully tested the function 2/9/23
Medium
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.


input: [ 1, 8, 6, 2, 5, 4, 8, 3, 7 ]
output: 49

state vars
leftPtr: 1
rightPtr: 8
length = 7 -> given by rightPtr - leftPtr 
height = 7 -> given by the min of arr[rightPtr] and arr[leftPtr]
area = length * height
implement strategy to check local height, and ultimate height, storing the max
logic for moving ptrs: 
    if leftPtr < rightPtr, increment left ptr
    if rightPtr < leftPtr, decrement right ptr
loop while left is less than right 

*/

const maxArea = (height) => {
    let local = 0
    let ultimate = 0
    
    let leftPtr = 0;
    let rightPtr = height.length - 1;

    while (leftPtr < rightPtr){
        let length = rightPtr - leftPtr
        let heightX = Math.min(height[rightPtr], height[leftPtr])
        local = length * heightX
        ultimate = Math.max(local, ultimate)
        if (height[leftPtr] <= height[rightPtr]){
            leftPtr++;
        } else {
            rightPtr--;
        }
    }
    return ultimate
};

let input1 = [ 1, 8, 6, 2, 5, 4, 8, 3, 7 ]
let input2 = [1,1]

console.log(maxArea(input1)) // 49
console.log(maxArea(input2)) // 1