/* 
MAXIMUM AVERAGE SUBARRAY
https://leetcode.com/problems/maximum-average-subarray-i/

input = [1,12,-5,-6,50,3], k = 4

currentAvg = (1 + 12 - 5  -6) / 4
ultimateAvg = Math.max(ultimateAvg, currentAvg)
output = 12.75
max is (12 - 5 - 6 + 50)\

https://leetcode.com/problems/maximum-average-subarray-i/
*/

const maximumAverageSubarray = (nums, k) => {
    
    let sum = 0;
    
    for (let x = 0; x < k; x++){
        sum += nums[x]
    }
    
    let maxAvg = sum / k;
    
    for (let x = k; x < nums.length; x++){
        sum = sum - nums[x-k] + nums[x];
        maxAvg = Math.max(maxAvg, sum/k)
    }
    
    return maxAvg
}

const input = [1,12,-5,-6,50,3], k = 4
//
//x = 0
//y = 3
// [1, 12, -5, -6] 
// 2 / 4 = 0.5

// x = 1 
// y = 4
// [12 , -5 , -6, 50] 
// 51 / 4 = 12.75

// x = 2
// y = 5 
// [ -5, -6, 50, 3]
// 42 / 4 = 10.5

console.log(maximumAverageSubarray(input,4)) // 12.75