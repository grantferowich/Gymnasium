/* 78. Subsets
Medium
15.3K
223
Companies
Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]] */
var subsets = function(nums) {
        if (nums.length === 0){
    return []
    }
    let powerArr = []
    
    const generateSubSets = (build, depth) => {
    if (depth > nums.length){
        return
    }
    if (!powerArr.includes(build)){
        powerArr.push(build);
    }
    
    generateSubSets(build, depth + 1);
    generateSubSets([...build, nums[depth]], depth + 1);
    }

    generateSubSets([], 0)
    return powerArr
};

/* Tests */
const arr1 = [1, 2, 3];
const resultArr1 = subsets(arr1);
const arr2 = [0];
const resultArr2 = subsets(arr2);
console.log('Result 1: ', resultArr1)
console.log('Result 2: ', resultArr2)