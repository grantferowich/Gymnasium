/*
 * ## Greater Values
 *
 * Successfully tested the solution 1/10/23.
 * 
 * *Given an sorted array of integers, and a target value return the number of values greater the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 5 --> 4`
 * `[1, 2, 3], 4 --> 0`
 * `[1, 10, 22, 59, 67, 72, 100], 13 --> 5`
 *
 * Diagram
 * Multiple pointer diagram
 * 
 * startIdx 
 * [1, 10, 22, 59, 67, 72, 100]  // initial array
 * [22,59,67,72,100] // array we want 
 *         m            
 * 
 * target: 13
 * expected output: 5
 * terminate loop at midpt = 1 + 1 
 * return array.length - 1  (7 - 1 )
 * 
 */ 

// check for the stop condition
// stop loop condition == if the midIdx < target and target < mid + 1
// stop when array[midIdx] <= target <= array[midIdx + 1]
// and return length of array from array[midIdx + 1] to the end of the array with slice

// if the stop condition is not satisfied and the value at midIdx is less than the target 
// increment startIdx to midIdx + 1

// if the stop condition is not satisfied and the value at midIdx is greater than the target value
// decrement endIdx to midIdx - 1

// if the stop condition is not satisfied and the value at midIdx is equal to the target value
// the 

// loop while the following is true: the value at startIdx is less than the target value
// if midIdx is less than target increment startIdx to midIdx + 1  
// if midIdx is greater than target decrement endIdx to midIdx - 1
// if midIdx is equal to the target return the array length from midIdx to the index at the end of the array
// if the pointer at i is less than the target and the value at i+1 is greater than the target
// stop the loop with the pointer set to i + 1

// Complexity Analysis
// Time complexity: O(log(N)). The function cuts the array in half to search for the target.
// Aux Space analysis: O(1). There are a few state variables declared yet there are no extra linear data structures. 


function greaterValues(arr, target) {
    if (target > arr[arr.length-1]){return 0}
    let startIdx = 0;
    let endIdx = arr.length -1;
    let midIdx;
    
    while (startIdx <= endIdx){
        midIdx = startIdx + parseInt((endIdx - startIdx) / 2);
    //   console.log('midIdx: ', midIdx);
      if (arr[midIdx] <= target){
        startIdx = midIdx + 1;
        // console.log('startIdx: ', startIdx)
      } else {
        // console.log('endIdx', endIdx)
        endIdx = midIdx - 1;
      }
    }
  
    return arr.length - midIdx
  }

console.log(greaterValues([1, 2, 3, 5, 5, 7, 9, 10, 11], 5)) //  --> 4
console.log(greaterValues([1,2,3], 4)) // => 0
console.log(greaterValues([1, 10, 22, 59, 67, 72, 100], 13)) // => 5

console.log(greaterValues([1, 10, 15, 18, 20, 22, 26, 29, 31, 35, 48, 59, 67, 72, 100], 20)) //  => 11
console.log(greaterValues([1, 10, 15, 18, 20, 22, 26, 29, 31, 35, 48, 59, 67, 72, 100], 60)) //  => 3
console.log(greaterValues([1, 10, 15, 18, 20, 22, 26, 29, 31, 35, 48, 59, 67, 72, 100], 900)) //  => 3