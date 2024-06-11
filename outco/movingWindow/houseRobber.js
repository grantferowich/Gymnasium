/**
 * 198 House Robber 
 * 
 * 
 * Successfully tested the function on July 29,2023.
 * 
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing each
 * of them is that adjacent houses have security systems connected and it will automatically contact 
 * the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, 
 * return the maximum amount of money you can rob tonight without alerting the police.
 * 
 * input: nums = [1,2,3,1]
 * output: 4, rob house at index 0 and at index 2
 * 
 * input: [2, 7, 9, 3,1]
 * output: 12. Rob 2 + 9 +1.
 * 
 * Successfully passed two test cases 12/14/22. 
 * 
 */


// const houseRobber = (array) => {
//     let localInt = 0;
//     let ultimateInt = 0;
//     let leftPtrInt = 0;
//     let currentIdxInt = 0;
//     let righPtrInt = leftPtrInt + 2
//     while (leftPtrInt < array.length ){
//         let valueInt = array[leftPtrInt];
//         localInt = valueInt;
//         righPtrInt = leftPtrInt + 2
//         while (righPtrInt < array.length){
//             localInt += array[righPtrInt];
//             currentIdxInt = leftPtrInt;
//             righPtrInt += 2;
//         }
//         ultimateInt = Math.max(localInt, ultimateInt);
//         leftPtrInt++;
//     }
//     return ultimateInt;
// }


// const houseRobber = (array) => {

//     let leftPtrInt = 0;
//     let rightPtrInt = leftPtrInt + 2;
//     while (leftPtrInt < array.length && rightPtrInt < array.length){


//     }
// }



const houseRobber = (array) => {
    let maxRobbedTotalInt = 0;
    let maxRobbedPreviousInt = 0;
    let xInt = 0;
    while (xInt < array.length){
        // set the current value to be the greater of maxTotal,
        // and the maxTotal plus the current house
        const currentRobbedInt = Math.max(array[xInt] + maxRobbedPreviousInt, maxRobbedTotalInt);
        // set the previous total to be the maxTotal
        maxRobbedPreviousInt = maxRobbedTotalInt;
        // set the max total to be the current total
        // the new max total incorporates the value of the present house
        maxRobbedTotalInt = currentRobbedInt;
        xInt++;
    }
    return maxRobbedTotalInt;
}
/* Tests */
console.log(houseRobber([1,2,3,1])) // 4
console.log(houseRobber([2, 7, 9, 3,1])) // 12
const arr3 = [1,2,1,1];
const arr4 = [2, 1, 1, 2];
const int3 = houseRobber(arr3);
const int4 = houseRobber(arr4);
console.log('Result 3: ', int3); // expect 3
console.log('Result 4: ', int4);
/* Test results */

