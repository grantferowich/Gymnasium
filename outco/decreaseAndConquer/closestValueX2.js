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
 * `[1, 2, 3], 8 --> 3`
 * `[1, 10, 22, 59, 67, 72, 100], 70 --> 72`'
 * 
 * look at the middle number
 * store the difference between the middle number and the target number as differenceInt
 * if the present differenceInt is smaller than the ultimateDifferenceInt update ultimateDifferenceInt and closestInt
 * if the middle number is greater than or equal to the target, reset leftPtrInt
 * if the middle number is less than the target, reset rightPtrInt
 */


