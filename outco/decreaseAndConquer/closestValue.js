
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

// to ensure the returned value is the smallest integer!! 
// the initial function does not handle this edge case well, 
// e.g. (1,2,3,4,5,7,7,7,7,7,7,7,7,9,10), 6 has an expected return of 5
// the function's actual output was 7
// the function may store values in a structure if the value is smaller than the closest
// return the element from the structure which has the smallest value
// for cases when the difference between the arr[midIdx] and target is smaller than the closest
// store the arr[midIdx] as a value and the difference as a key
// 
// iterate over the hash map
// for each key in the hash
// if the key is equal to the closest var's value
// push the key into an array
// sort the array and return the first value at index 0


function closestValue(numsArr, targetInt) {
  if (targetInt > numsArr[numsArr.length-1]){
    return numsArr[numsArr.length -1]
  }
  let startIdxInt = 0;
  let endIdxInt = numsArr.length;
  let midIdxInt;
  let closestInt = Infinity;
  let hash = {};
  let resultArr = [];
    
  while (startIdxInt < endIdxInt){
      midIdxInt = parseInt((endIdxInt + startIdxInt)/2);

      // process middle element relative to input target 
      let differenceInt = Math.abs(targetInt - numsArr[midIdxInt]);
      // process the result 
      if (differenceInt <= closestInt){
        // hash storage steps: 
        // store the middle element as a key
        // store the processing result as the value
        hash[numsArr[midIdxInt]] = differenceInt;
        // update the state variable to be returned, called closest
        closestInt = differenceInt;
      }

      // decide where to keep processing, the left half of the array
      // or the right half of the array
      if (numsArr[midIdxInt] < targetInt){
        startIdxInt = midIdxInt + 1;
      } else {
        endIdxInt = midIdxInt - 1;
      }
    }


    // store all the keys from the hash which are characterized by having a value which is equal to the closest value to the target
    for (let keyInt in hash){
      if (hash[keyInt] === closestInt){
          resultArr.push(keyInt)
      }
    }
    // only return the smallest element which is the closest to the target 
    return parseInt(resultArr[0])
}
    
/* TESTS */
console.log(closestValue([1, 2, 3, 4, 5, 7, 9, 10, 11], 6)) // 5 // explanation: Since 5 is the lower of 5 and 7, return 5.
console.log(closestValue([1, 2, 3], 8)) // 3 
console.log(closestValue([-1, -2, 0], -5)) // -2
