// given an array and a target number 
// return a boolean for whether or not
// two integers in the array sum together
// to equal the target 

// [4,2,6,5,7,9,10], 13
// true since 9 and 4 combine to equal 13

// the brute force method 
// two loops comparing all possible sums
// if the sum equals target return true
// this method has a O(N^2) runtime


// step 1 init a hash map
// store values in a hash map as keys
// store true

// for each element in the array
// check if the result of target minus the element exists in the hash map




const twoSum = (numbers, target) => {
    let hash = {}
    // store each array element as a hash map key
    for (let i = 0; i < numbers.length; i++){
        hash[numbers[i]] = true;
    }
    // {4: true, 2: true, 6: true, 5: true, 7: true, 9: true, 10: true}
    // if the target minus one of the keys equals the value of some other key
    // return true
    for (let key in hash){
        if (hash[target - key] === true){
            return true;
        }
    }
    return false;
}

module.exports = twoSum

// for the sake of exposure here is the brute force solution
// the brute force solution features two while loops 

//Example:
//Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSumBruteForce = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) return [i, j];
      }
    }
  };
  
  //
  
  console.log(twoSumBruteForce([2, 7, 11, 15], 9));
  