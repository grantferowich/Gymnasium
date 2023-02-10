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

const slidingWindowMaximum = (nums, k) => {
    let rightPtr = 0;
    let leftPtr = 0;
    let maxVal = -Infinity
    let maxValIndex = -1
    let output = []

    while (rightPtr < nums.length){
        let num = nums[rightPtr];
        // maxVal = Math.max(maxVal, num);
        if (num >= maxVal){
            maxVal = num;
            maxValIndex = rightPtr;
        }
        rightPtr++;
        
        if (rightPtr - leftPtr === k){
            output.push(maxVal)
            // handle the case where the maxVal leaves when leftPtr moves
            if (maxValIndex === leftPtr){
                maxVal = -Infinity;
                for (let x = leftPtr+1; x < rightPtr; x++){
                    let num = nums[x];
                    if (num >= maxVal){
                        maxVal = num;
                        maxValIndex = x
                    }
                }
            }
            leftPtr++
        }
        
        // if (rightPtr - leftPtr >= k){
        //     leftPtr++
        //     if (nums.indexOf(maxVal) < leftPtr){
        //         maxVal = -Infinity
        //         for (let x = leftPtr; x < rightPtr; x++){
        //             let num = nums[x];
        //             maxVal = Math.max(maxVal, num)
        //         }
        //     }
        // }
    }
    return output;
}

let nums1 = [1,3,-1,-3,5,3,6,7]  // [3,3,5,5,6,7]
let k1 = 3

let nums2 = [1]
let k2 = 1

let nums3 = [1, -1]
let k3 = 1

let nums4 = [1,3,1,2,0,5]
let k4 = 3

console.log(slidingWindowMaximum(nums1, k1)) // [3,3,5,5,6,7]
console.log(slidingWindowMaximum(nums2, k2)) // [1]
console.log(slidingWindowMaximum(nums3, k3)) // [1, -1] 
console.log(slidingWindowMaximum(nums4, k4)) // [3,3,2,5] // [3,3,0,5]

/*
Explanation: 
Window position          Max
---------------         -----
 [1   3   1]  2   0   5     3
  1  [3   1   2]  0   5     3
  1   3  [1   2   0]  5     2
  1   3   1  [2   0   5]    5
  */
