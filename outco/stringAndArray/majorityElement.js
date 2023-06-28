/* 
169. Majority Element

Successfully tested the function on June 28, 2023.

Easy
15.4K
456
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2 

Input nums = [99, 99, 99, 22, 22]
output = 99
Why? 3 out of 5 elements are 99, 
which is the majority. 


Create a map. 
Keep track of the frequency of each array element.
Loop over the map. If any key has a frequency greater than the 
halfInt, then return the key. 

O(k) where k is the number of unique elements
O(k) space (the map)
O(k) time (looping over the map's keys)


*/

const majorityElement = (arr) => {
    let halfInt = arr.length / 2
    let intMap = new Map();
    let xInt = 0;
    while (xInt < arr.length){
        let elementInt = arr[xInt];
        if (intMap.has(elementInt)){
            let frequencyInt = intMap.get(elementInt);
            intMap.set(elementInt, frequencyInt + 1);
        }
        if (!intMap.has(elementInt)){
            intMap.set(elementInt, 1);
        }
        xInt++
    }
    for ([key, value] of intMap){
        if (value > halfInt){
            return key;
        }
    }
}


/* Tests */

const numsArr1 = [3, 2, 3];
const numsArr2 = [2, 2, 1, 1, 1, 2, 2];
const numsArr3 = [99, 99, 99, 22, 22];

const resultInt1 = majorityElement(numsArr1);
const resultInt2 = majorityElement(numsArr2);
const resultInt3 = majorityElement(numsArr3);

console.log('Result 1: ', resultInt1);
console.log('Result 2: ', resultInt2);
console.log('Result 3: ', resultInt3);

/* Test results

Result 1:  3
Result 2:  2
Result 3:  99

*/