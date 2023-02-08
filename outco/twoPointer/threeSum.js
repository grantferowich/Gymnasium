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

 */



 var threeSum = function(nums) {
    
 };