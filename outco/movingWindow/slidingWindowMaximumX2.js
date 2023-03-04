/* 
239. Sliding Window Maximum

Hard
Successfully tested the function 03/02/2023.

Question: You are given an array of integers nums, 
there is a sliding window of size k which 
is moving from the very left of the array to the 
very right. You can only see the k numbers in 
the window. Each time the sliding window moves 
right by one position. Return the max sliding window.

Input: an array, integer k
Output: an array

Psuedocode
initialize the fixed size window from 0 to window size
    -> for loop i = 0 to k-1
move the window 
    -> for loop i = k to end

Maintain a queue which pushes elements and which evicts 
elements as the window slides over the input array.

*/ 

const slidingWindowMaximum = (array, k) => {
    let slidingWindowArr = [];
    let outputArr = [];
    let currentMaxInt = -Infinity;
   
    // initialize fixed window from 0 to k-1
    for (let x = 0; x < k - 1; x++){
        if (array[x] > currentMaxInt){
            currentMaxInt = array[x];
        } 
        slidingWindowArr.push(array[x])
    }
    outputArr.push(currentMaxInt)

    // move window from k to end of array input
    for (x = k; x < array.length; x++){
        if (array[x] > currentMaxInt){
            currentMaxInt = array[x];
        }
        outputArr.push(currentMaxInt)
        slidingWindowArr.push(array[x])
        let evictedValue = slidingWindowArr.unshift()
        if (evictedValue === currentMaxInt){
            currentMaxInt = -Infinity;
            for (let y = 0; y < slidingWindowArr.length; y++){
                if (slidingWindowArr[y] > currentMaxInt){
                    currentMaxInt = slidingWindowArr[y]
                }
            }
        }
    }
    return outputArr;
}

/*  TESTS */

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

const numsArr = [1,3,-1,-3,5,3,6,7]
const output = slidingWindowMaximum(numsArr, 3)
console.log('Test 1:', output)