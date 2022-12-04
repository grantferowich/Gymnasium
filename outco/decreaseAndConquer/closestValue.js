
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
//             9     10
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
let endIdx = arr.length - 1;
let closest;


    while (startIdx < endIdx){
    let midpt = Math.floor(endIdx - startIdx);

    if (midpt < target){
        let prev =Math.abs(target - arr[midpt -1]) 
        let mid = Math.abs(target - arr[midpt])
        let next = Math.abs(target - arr[midpt + 1])
        if (prev < mid && prev < next) { closest = arr[midpt - 1]}
        if (mid < prev && mid < next) { closest = arr[midpt]}
        if (next < prev && next < mid) { closest = arr[midpt + 1]}
        startIdx = midpt + 1;
    } else {
        let prev =Math.abs(target - arr[midpt -1]) 
        let mid = Math.abs(target - arr[midpt])
        let next = Math.abs(target - arr[midpt + 1])
        if (prev < mid && prev < next) { closest = arr[midpt - 1];}
        if (mid < prev && mid < next) { closest = arr[mid];}
        if (next < prev && next < mid) { closest = arr[midpt + 1]}
        endIdx = midpt - 1;
    }}
    return console.log('closest', closest)
}



closestValue([1, 2, 3, 5, 5, 7, 9, 10, 11], 6)
