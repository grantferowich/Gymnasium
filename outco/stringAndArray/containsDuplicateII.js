/* 
219. Contains Duplicate II

Developed the solution on August 19, 2023. 

Easy
5.3K
2.8K
Companies
Given an integer array nums and an integer k, 
return true if there are two distinct
indices i and j in the array such that 
nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

Approach 
Maintain a hashmap with numbers as keys and 
the frequency of the numbers as values.

Loop over the array.
If a key has a frequency of two or greater, 
scan the rest of the array to find another appearance 
of the same key. When the duplicate is found,
return true if the distance is less than 
or equal to kInt. 

*/

const containsDuplicate = (array, kInt) => {

    let frequencyMap = new Map();
    let xInt = 0;
    while (xInt < array.length){
        let valueInt = array[xInt];
        if (frequencyMap.has(valueInt)){
            frequencyMap.set(valueInt, frequencyMap.get(valueInt) + 1);
        }
        if (!frequencyMap.has(valueInt)){
            frequencyMap.set(valueInt, 1);
        }
        xInt++;
    }

    xInt = 0;
    while (xInt < array.length){
        if (frequencyMap.get(array[xInt]) > 1){
            let gInt = 0;
            while (gInt < array.length){
                if (Math.abs(gInt - xInt) <= kInt && array[xInt] === array[gInt] && gInt !== xInt){
                    return true;
                }
                gInt++
            }
        }
        xInt++;
    }
    return false;
}

/* Tests */

const numsArr1 = [1,2,3,1];
const kInt1 = 3;
const result1ToF = containsDuplicate(numsArr1, kInt1);

const numsArr2 = [1, 0, 1, 1];
const kInt2 = 1;
const result2ToF = containsDuplicate(numsArr2, kInt2);

const numsArr3 = [1,2,3,1,2,3];
const kInt3 = 2;
const result3ToF = containsDuplicate(numsArr3, kInt3);
console.log('Result 1: Expect true: ', result1ToF);
console.log('Result 2: Expect true: ', result2ToF);
console.log('Result 3: Expect false: ', result3ToF);
/* Test results */