const findNumbers = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i].toString();
    if (n.length % 2 === 0) {
      count += 1;
    }
  }
  return console.log(count);
};
/// example
const nums = [12, 345, 2, 6, 7896]; //2
findNumbers(nums)
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.
