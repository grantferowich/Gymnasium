var subtractProductAndSum = function(n) {
  let nums = n.toString();
  let prod = 1;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    prod *= Number(nums[i]);
  }

  for (let j = 0; j < nums.length; j++) {
    sum += Number(nums[j]);
  }
  return prod - sum;
};

//Example
//Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21
