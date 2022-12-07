// Given an array of integers and a target integer
// determine whether a subarray of consecutive elements sum 
// to equal the target array

// Input: [6,12,1,7,5,2,3], 14      	=>	Output: true (7+5+2)
// Input: [8,3,7,9,10,1,13], 50		=>	Output: false
// Input: [1,2,3], 10           => Output: false

// instantiate current sum 
// add elements to current sum 
// while current sum is less than or equal to target
// add element to current sum

// https://github.com/OutcoSF/outco-class-163/blob/main/whiteboarding/w2_d1_sliding_window/222_consecutive_subarray_sum.md
const consecutiveSubarraySum = (nums, target) => {

    let currentSum = 0;
    let i = 0;
    let j = 0; 
    while (currentSum <= target) {

        //hunting logic
        currentSum += nums[i];
       while( j < nums.length){
            if (target == currentSum){
                return true;
            }
            if (i !== j){
                currentSum += nums[j]
            }

            //catch up logic to remove element j if element j sends currentSum over target
            // catch up logic is the logic for stopping j
            if (currentSum > target){
                currentSum -= nums[j]
            } j++
        }
        i++
    }
    return false;
}


// Both test cases passed on 12/7/22.
console.log(consecutiveSubarraySum([6,12,1,7,5,2,3], 14)) // true
console.log(consecutiveSubarraySum([6,12,1,7,5,2,3], 900)) // false
