/* 
Sliding Window Maximum 
Hard
Successfully passed all test cases on Leetcode 02/09/23


input: an array, and k
output: an array 
constraints: 
edge: 
    - return [] when the length of the input is 0

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7


 ideas and approach:
 keep track of maxVal with rightPtr
 declare rightPtr, leftPtr, maxVal, output
 loop as long as rightPtr is within the array
 once rightPtr - leftPtr reaches k:
                    -> then push maxVal to output
 once rightPtr - leftPtr exceeds k:
                    -> evict the first element 
                    -> from the array and increment leftPtr
 

*/

const slidingWindowMaximum = (nums, kInt) => {
    if (kInt > nums.length){
        return [];
    }
    let rightPtrInt = 0;
    let leftPtrInt = 0;
    let maxValInt = -Infinity;
    let maxValIndexInt = -1;
    let outputArr = [];
    while (rightPtrInt < nums.length){
        let numInt = nums[rightPtrInt];
        if (numInt >= maxValInt){
            maxValInt = numInt;
            maxValIndexInt = rightPtrInt;
        }
        rightPtrInt++;
        if (rightPtrInt - leftPtrInt === kInt){
            outputArr.push(maxValInt)
            // handle the case where the maxVal leaves when leftPtrInt is about to moves
            if (maxValIndexInt === leftPtrInt){
                maxValInt = -Infinity;
                // perform O(kInt) scan to find and store the maximum value in the window
                for (let xInt = leftPtrInt+1; xInt < rightPtrInt; xInt++){
                    let numInt = nums[xInt];
                    if (numInt >= maxValInt){
                        maxValInt = numInt;
                        maxValIndexInt = xInt
                    }
                }
            }
            leftPtrInt++
        }
    }
    return outputArr;
}

let nums1 = [1,3,-1,-3,5,3,6,7]  // [3,3,5,5,6,7]
let k1 = 3

let nums2 = [1]
let k2 = 1

let nums3 = [1, -1]
let k3 = 1

let nums4 = [1,3,1,2,0,5]
let kInt4 = 3


console.log(slidingWindowMaximum(nums1, k1)) // [3,3,5,5,6,7]
console.log(slidingWindowMaximum(nums2, k2)) // [1]
console.log(slidingWindowMaximum(nums3, k3)) // [1, -1] 
console.log(slidingWindowMaximum(nums4, k4)) // [3,3,2,5] // [3,3,2,5]

/*
Explanation: 
Window position          Max
---------------         -----
 [1   3   1]  2   0   5     3
  1  [3   1   2]  0   5     3
  1   3  [1   2   0]  5     2
  1   3   1  [2   0   5]    5
  */
