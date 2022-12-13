// CONSECUTIVE SUBARRAY SUM

// input: array of integers, target integer
// output: true
[6,12,1,7,5,2,3], 14  
const consecutiveSubarraySumPractice1 = (nums, target) => {

    let currentSum = 0;

    for (let i = 0; i < nums.length; i++){
        if (currentSum <= target){
            currentSum += nums[i];
        }
        for (let j = 0; j < nums.length; j++){
            if (target === currentSum){
                return true;
            }

            // hunting logic seeks to fulfill
            // condition currentSum === target 
            if ( i !== j){
                currentSum+= nums[j];
            }

            //catchup logic (but also still sort of aiming to fulfill 
            // initially desired condition)
            if (currentSum > target){
                currentSum -= nums[j]
            }
        }
    }
    return false;
}

console.log(consecutiveSubarraySumPractice1([6,12,1,7,5,2,3], 14))
console.log(consecutiveSubarraySumPractice1([6,12,1,7,5,2,3], 12))
