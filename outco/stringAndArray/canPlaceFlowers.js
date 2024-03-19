/* 
605. Can Place Flowers

Started engineering on June 28, 2023.
Successfully tested the function on June 29, 2023.

Easy
5.2K
878
Companies

You have a long flowerbed in which some of the plots are planted,
and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, 
where 0 means empty and 1 means not empty, and an integer n,
return true if n new flowers can be planted in the flowerbed 
without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

Input: 
arr = [1, 0, 0, 1, 0, 0, 1]
n = 1
output: false

Input:
arr =  [1, 0, 0, 0, 0, 0, 0, 1]
n = 2
output : true

Input:
flowerbedArr5 = [1,0,0,0,0,0,1];
nInt5 = 2 

The idea here is to count the number of sets of three consecutive 0's.
Maintain some capacityInt, which marks the number of available flower beds.
CapacityInt increments when three consecutive 0's are found. 
Consecutive0s is a thing I want to track.
If I have reached 3 consecutive 0s then I can increment capacityInt. 
After reaching 3 consecutive 0s, I want to reset the consecutive0s count back to 0. 
At the end I will return capcityInt >= n. 

*/

const canPlaceFlowers = (arr, int) => {
    let xInt = 0;
    while (xInt < arr.length){
        // three conditions
        // current is 0

        if (arr[xInt] === 0 &&
        // prev is 0 or oob
        (arr[xInt - 1] === 0 || arr[xInt - 1] === undefined)
        && (arr[xInt + 1] === 0 || arr[xInt + 1] === undefined)){
            arr[xInt] = 1;
            int--;
        }
        xInt++;
    }
    return int <= 0;
}

/* Test */

const flowerbedArr1 = [1,0,0,0,1];
const nInt1 = 1;
const flowerbedArr2 = [1,0,0,0,1];
const nInt2 = 2;
const flowerbedArr3 = [1, 0, 0, 1, 0, 0, 1];
const nInt3 = 1;
const flowerbedArr4 = [1, 0, 0, 0, 0, 0, 0, 1];
const nInt4 = 2;
// const flowerbedArr5 = [1,0,0,0,0,0,1];
// const nInt5 = 2 
const flowerbedArr6 = [0,0,1,0,1];
const nInt6 = 1;

const result1ToF = canPlaceFlowers(flowerbedArr1, nInt1);
const result2ToF = canPlaceFlowers(flowerbedArr2, nInt2);
const result3ToF = canPlaceFlowers(flowerbedArr3, nInt3);
const result4ToF = canPlaceFlowers(flowerbedArr4, nInt4);
// const result5ToF = canPlaceFlowers(flowerbedArr5, nInt5);
const result6ToF = canPlaceFlowers(flowerbedArr6, nInt6);

console.log('Result 1:', result1ToF) // true
console.log('Result 2:', result2ToF) // false
console.log('Result 3:', result3ToF) // false 
console.log('Result 4:', result4ToF) // true
// console.log('Result 5:', result5ToF) // true
console.log('Result 6:', result6ToF) // true
/* Test results */