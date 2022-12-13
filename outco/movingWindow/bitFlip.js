// Given a bit array of 0's and 1's 
// return the longest string of 0's 
// given the condition one flip of one subarray is within bounds

// For example in an array of 10 elements, if flipping 2 consecutive 0s
// means there would be a subarray of 0s whose length is 7 then return 7. 
// This simple example assumes the longest string of 0's that is possible
// after one flip of one subarray is 7.

// The problem essentially is asking for the longest sequence of 1s.
// By flipping the longest sequence of 1s into 0s
// and adding that count to the initial count of 0s
// the max total number of 0s is determined
/*
*       input = [0, 1, 0, 0, 1, 1, 0]
*       output: 6
*
*       input = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
*       output: 10
*       
*       input = [0, 0, 0, 1, 0, 1]\
*       output: 5
*
*
*
*
*/

// O(N^2) approach using 2 for loops

const bitFlip = (array) => {

    // maxDifferent is the longest sliding window of 1s
    // maxDifferent is calculated by taking the count of 1s less the
    // count of 0s
    let maxDifferent = 0;
    let original0Count = 0;
    let n = array.length;


    // for all elements x in the array
    for (let x = 0; x < n; x++){
        if (array[x] == 0){
            original0Count++
        } 
        let count0 = 0;
        let count1 = 0;

        // for each element x consider the subarray from arr[x] to arr[y]
        // consider all subarrays initializing at index x
        for (let y = x; y < n; y++){
           
            // array[y] == 1 ? count1++ : count0++;
            if (array[y] == 1){
                count1++;
            } else {
                count0++;
            }
            maxDifferent = Math.max(maxDifferent, count1 - count0)
            // console.log('maxDifferent', maxDifferent)
        }
    }
    return original0Count + maxDifferent;
}

// These test cases passed (12/7/22)

console.log(bitFlip([1, 1, 1, 0, 0, 0, 0, 0, 0, 0])) // 10
console.log(bitFlip([0, 0, 0, 1, 0, 1])) // 5