
const twoSum = function(nums, target) {
    const hash = {};
    let num1;
    let num2;

    for (let x = 0; x < nums.length; x++){
        if (!hash[nums[x]]){
            hash[nums[x]] = true;
        }
    }
    for (let key in hash){
        if (hash[target - key] === true){
            num1 = parseInt(target - key);
            num2 = parseInt(key)
        } 
    }
    return [nums.indexOf(num1), nums.lastIndexOf(num2)]
};

console.log(twoSum([2,7,11,15],9)) // [ 0 , 1 ]