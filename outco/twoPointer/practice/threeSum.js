/* 

15. 3Sum
Medium
Companies
Given an integer array nums, 
return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

 Ideas
 brute force    
 three pointers, three for loops
 when i, k, and j all unique and sum to 0
 store instances of i,k,j === 0 in a set 

 pointers
 init pointer at left, right, middle

 hash table
 put all numbers into a hash table
 check if target - left - right exists in table
 if so, put the triple into set


 hash table does not capture all cases

 sort the arr -  O(log(n))
 for loop 
 while loop - O(N^2)

 when looking a x
 if the sum of x , left , right is less than 0, increment the left pointer
 if the sum of x , left, right is greater than 0, decrement the right pointer
 */

const threeSum = (nums) => {
    if (nums.length < 3){
        return [];
    }

    let L = nums.length;
    let output = [];
    nums = nums.sort((a,b) => a - b);
    let r = nums.length - 1 

    for (let x = 0; x < L; x++){
        // skip duplicates
        let l = x + 1
        while (l < r){
            let sum = nums[x] + nums[l] + nums[r];
            if (sum === 0){
                let k = [nums[x], nums[l], nums[r]];
                output.push(k)
                // skip duplictes
                while ( l < r && nums[l] === nums[l+1]) l++
                while ( l < r && nums[r] === nums[r-1]) r--
                l++;
                r--;
            }
            if (sum > 0){
                r--
            }
            if (sum < 0){
                l++
            }
        }
    }


    return output;
 };

const input1 = [-1,0,1,2,-1,-4]; // [[-1,-1,2],[-1,0,1]]
const input2 = [-1,1,0,2,3,-5,8] // [[2,3,-5], [-1,1,0]]
const input3 = [0,0,0] // [[0,0,0]]

console.log(threeSum(input1)) // [[-1,-1,2],[-1,0,1]] | 
console.log(threeSum(input2)) // [[2,3,-5], [-1,1,0]] | pass
console.log(threeSum(input3)) // [[0,0,0]] | pass