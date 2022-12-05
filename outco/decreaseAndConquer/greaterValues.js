/*
 * ## Greater Values
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


function greaterValues(arr, target) {
 
    let startIdx = 0;
    let endIdx = arr.length;
    let midIdx;

    if (arr[arr.length -1] < target){ return console.log(0)}

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
  
    return console.log(arr.length - midIdx)
  }

greaterValues([1, 2, 3, 5, 5, 7, 9, 10, 11], 5) //  --> 4
greaterValues([1,2,3], 4) // => 0
greaterValues([1, 10, 22, 59, 67, 72, 100], 13) // => 5

greaterValues([1, 10, 15, 18, 20, 22, 26, 29, 31, 35, 48, 59, 67, 72, 100], 20) //  => 11
greaterValues([1, 10, 15, 18, 20, 22, 26, 29, 31, 35, 48, 59, 67, 72, 100], 60) //  => 3