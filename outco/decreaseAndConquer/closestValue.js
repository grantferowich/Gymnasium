
/*
 * ## Closest Value
 *
 * *Given a sorted bit array of integers, and a target value, find the number in the array that is closest to the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * If there are two numbers tied for the closest value, return the lowest value.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 6 --> 5`
 * 
 *
 * `[1, 2, 3], 8 --> 3`
 * `[1, 10, 22, 59, 67, 72, 100], 70 --> 72`
 * 
 */

//                11                => 6
//              /   \
//             9    10
//           /  \
//          5    7
//        /  \
//       5   3
//     /  \
//    1   2 
//  
//  
//
// initialize a startIdx and endIdx 
// pick the middle idx as the midpoint of the array
// if the difference between the target and the element at the middle index is positive 
// set the startIdx to middle idx + 1
// set the difference as the result of the target number less the element at the middle index
// if the array at the midddle idx is equal to the number return 0 


function closestValue(arr, target) {
    let startIdx = 0;
    let endIdx = arr.length;
    let midIdx;
    let closest = Infinity;
    let value = null;

    // value is the return variable
    // value returns a specific location in the array
    // closest, difference, and value
    
    while (startIdx < endIdx){
      midIdx = parseInt(startIdx + parseInt((endIdx - startIdx)/2))
      let difference = Math.abs(target - arr[midIdx])
      if (difference < closest){
        closest = difference;
        value = arr[midIdx]
      }
      if (arr[midIdx] < target){
        startIdx = midIdx + 1
      } else {
        endIdx = midIdx - 1;
      }
    }
    
    return value;
}
    

console.log(closestValue([1, 2, 3, 5, 5, 7, 9, 10, 11], 6)) // should return 5 since 5 is the lower of 5 and 7
console.log(closestValue([1, 2, 3], 8)) // 3 // fn works 
console.log(closestValue([-1, -2, 0], -5)) // -2
