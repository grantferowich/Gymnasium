const maxSubArray = (nums) => {
    let local = 0;
    let ultimate = 0;
    let x = 0;
    while (x < nums.length){

        local = Math.max(local + nums[x], nums[x]);
        ultimate = Math.max(ultimate, local)
        x++
    }
    return ultimate;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([5,4,-1,7,8])) // 23