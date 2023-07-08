/* 268. Missing Number
Easy
9.8K
3.2K
Companies
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.


Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.


Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums. 

Here is the algorithm. Loop over the array starting at 0.
Step through the array n-1 times, where n is the length.
Maintain a map. 
In the map, there are 0 to n-1 keys with a keyInt and trueOrFalse set as true.
Count up normally from 0 to n-1 to build the intMap.
Now, loop over the input arr. 
At each step, set the intMap value to false.
Finally, retrieve the key from the map whose value is true. Only one key will have a 
value of true. 

*/