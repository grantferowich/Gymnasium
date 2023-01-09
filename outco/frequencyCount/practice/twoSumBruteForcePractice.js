// for the sake of exposure here is the brute force solution
// the brute force solution features two while loops 

//Example:
//Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// Complexity analysis
// Time complexity: O(N^2). This function has a quadratic runtime
// due to the presence of a nested loop over a linear data structure.
// Space complexity: O(1). The only state variables in the function are i and j. 

const twoSumBruteForce = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) return true;
      }
    }
    return false 
  };
  
  //
  
  console.log(twoSumBruteForce([2, 7, 11, 15], 9));
  console.log(twoSumBruteForce([2, 7, 11, 15], 99));
  