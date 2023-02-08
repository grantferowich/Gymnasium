
/* 

Successfully tested the solution where every possible 
combination is checked.
The function was tested across two test cases 2/7/23.

*/

var twoSumII = (numbers, target) => {

    let nums = {};
    let x = 0;
    while (x < numbers.length){
        let num = numbers[x];
        nums[num] = nums[num] + 1 | 1;
        x++
    }
    x = 0;
    while (x < numbers.length){
        if (nums[target-numbers[x]]){
            let idx1 = numbers.indexOf(numbers[x])
            let idx2 = numbers.indexOf(target-numbers[x])
            
            return [idx1+1, idx2+1]
        }
        x++
    }
    
};

console.log(twoSumII([2,7,11,15], 9)) // [ 1, 2 ]
console.log(twoSumII([ 2, 3, 4 ], 6))  // [ 1 , 3 ]