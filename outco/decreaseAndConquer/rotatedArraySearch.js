
/*

The solution was partially tested as of 12/28/2022.

 * ## Sorted and Rotated Array [Extra Credit]
 * *Given an array with distinct values that is sorted and rotated, find out if a target value exists in the array.*
 *
 * A sorted array is rotated by taking an unknown amount of values from the beginning and placing it at the end.
 *
 * `[3, 4, 5, 1, 2]` is rotated left by 2.
 * `[99, 14, 25, 78, 93]` is rotated to the right by 1.
 *
 * **Parameters**
 * Input: arr {Array}
 * Output: {Boolean}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(1) /// this seems wrong since the array may grow, input complexity grows, total space complexity grows
 *
 * **Examples**
 * `[35, 46, 79, 102, 1, 14, 29, 31], 46 --> true`
 * `[35, 46, 79, 102, 1, 14, 29, 31], 47 --> false`
 * `[7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 9 --> true`
 * 
 * 
 * Inputs: array, target 
 * Output: boolean
 * Constraints: O(logn) ==> must use BS
 * Space: O(N)
 * Edge cases: Return false if the input array is empty
 * 
 * // Binary search only works on sorted arrays
 * // the given arrays are rotated 
 * // insight: un-rotate the array to enable use of BS
 * // rotating left takes the largest
 * 
 * Test case: Left rotated
 * 
 *  [3, 4, 5, 1, 2] is rotated left by 2.
 * 
 *  // rotating left means taking N elements and appending them to the front
 * 
 * 
 * rotating left means 
 * 
 * Test case: Right rotated  
 * 
 * [99, 14, 25, 78, 93] is rotated to the right by 1. 
 * 
 * rotating right means taking N elements from end and moving them to the front
 *  
 * Could there be a case in which the right rotation and left rotation produce the same array? 
 * [ 3, 4, 5, 1, 2]
 * 
 * 
 * diagram an example
 * 
 *      startIdx=0
 *      length = 8
 *      endIdx = 7
 *      midIdx = 3
 * 
 * *  `[35, 46, 79, 102, 1, 14, 29, 31], 46 --> true
 *                   |
 *                  midpt ==> arr[midIdx - 1] < arr[midIdx] > arr[midItx +1]
 *     
 *     startIdx = 0
 *     length = 4
 *     endIdx = 3
 *     midIdx = 1
 *     [35, 46, 79, 102]
 *          |
 *        midIdx 
 * 
 * 
 * 
 * 
 */


// 
// Solution in O(logN) time
// check the number at arr[midpoint] to see if the number is less than the number at  arr[midpt - 1] 
// if the arr[m] is less than the arr[m-1] then m is the rotation index 
// the numbers on both sides of the rotation index are sorted

// if the arr[m] is equal to the target return true

// if the target is less than arr[m], call the binary search helper function on elements from 0 to m
// else call the binary search function on arr[m] to arr[length-1]

// binary search function takes in an array, start idx, end idx, target
// 

const binarySearch = (array, num1, num2, target) => {
    if (!array || array.length === 0){return -1}
    let startIdx = num1;
    let endIdx = num2;
    let midIdx;
    while (startIdx <= endIdx){
        midIdx = startIdx + parseInt((num1+num2)/2)
        console.log('midIdx', midIdx);
        if (arr[midIdx] === target){ return true;}
        if (arr[midIdx] <= target){
            endIdx = midIdx - 1;
        } else {
            startIdx = midIdx + 1;
        }
    }
    return false;
}

// const rotatedArraySearch = (nums, target) => {

//     let startIdx = 0; 
//     let endIdx = nums.length -1;
//     let midIdx;

//     const helper = () => {
//         if (target < nums[midIdx]){
//             binarySearch(nums, 0, midIdx, target)
//         } else {
//             binarySearch(nums, midIdx, nums.length - 1, target)
//         }
//     }

//     while (startIdx <= endIdx){
//         let midIdx = startIdx + parseInt((startIdx+endIdx)/2)
//         // console.log('midIdx: ', midIdx)
        
//         if (nums[midIdx-1] <= nums[midIdx] >= nums[midIdx+1]){
//             console.log('midIdx', midIdx)
//             helper();
//         } 

//         if (nums[midIdx-1] < nums[midIdx] < nums[midIdx +1 ]){
//             endIdx = midIdx -1;
//         } else {
//             startIdx = midIdx + 1;
//         }
//     }    
  
//     return false;
// }



//Solution 1: includes method
// function rotatedArraySearch(nums, target) {
   
// return console.log(nums.includes(target))
// }
// console.log(rotatedArraySearch([35, 46, 79, 102, 1, 14, 29, 31], 46)); // --> true
// console.log(rotatedArraySearch([35, 46, 79, 102, 1, 14, 29, 31], 47)); // --> false
// console.log(rotatedArraySearch([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 9)); // --> true

/*

startIdx = arr[0] = 35
endIdx = arr[7] = 31 
midIdx = arr[4] = 1 
target = 46
expectedd output: true because 46 sits at index 1
array = [35, 46, 79, 102, 1, 14, 29, 31]  

arr[midIdx] < target, so look left

startIdx = arr[0] = 35
endIdx = arr[3] = 102
midIdx = arr[1] = 46










*/

function rotatedArraySearch(nums, target) {

    let startIdx = 0;
    let endIdx = nums.length - 1;
    let midIdx;
  
    while (startIdx <= endIdx){
      midIdx = startIdx + parseInt((startIdx + endIdx)/2);
      if (target === nums[midIdx]){
        return true;
      }
      //left array sorted
      if (nums[startIdx] < nums[midIdx]){
        if (target >= nums[startIdx] && target < nums[midIdx]){
          endIdx = midIdx - 1;
        } else {
          startIdx = midIdx + 1;
        }
        // right array sorted
      } else {
        if (target > nums[midIdx] && target <= nums[endIdx]){
          startIdx = midIdx + 1;
        } else {
          endIdx = midIdx - 1;
        }
      }
    }
    return false;
}

console.log(rotatedArraySearch([35, 46, 79, 102, 1, 14, 29, 31], 46)); // --> true
// startIdx: 0
// endIdx: 7
// target: 46
// midIdx: 3
// nums[midIdx]: 102
// nums[startIdx]: 35
// nums[endIdx]: 31

console.log(rotatedArraySearch([35, 46, 79, 102, 1, 14, 29, 31], 47)); // --> false
console.log(rotatedArraySearch([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 7)); // --> true
// startIdx: 0
// endIdx: 0
// target: 7
// midIdx: 0
// nums[midIdx]: 7
// nums[startIdx]: 7
// nums[endIdx]: 7

