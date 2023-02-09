/* 

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
    let output = []

    while (rightPtr < nums.length){
        let num = nums[rightPtr];
        maxVal = Math.max(maxVal, num);
        rightPtr++
        if (rightPtr - leftPtr === k){
            output.push(maxVal)
        }
        if (rightPtr - leftPtr >= k){
            leftPtr++
        }
    }
    return output;
}

let nums1 = [1,3,-1,-3,5,3,6,7]  // [3,3,5,5,6,7]
let k1 = 3

let nums2 = [1]
let k2 = 1
console.log(slidingWindowMaximum(nums1, k1)) // [3,3,5,5,6,7]
console.log(slidingWindowMaximum(nums2, k2)) // [1]