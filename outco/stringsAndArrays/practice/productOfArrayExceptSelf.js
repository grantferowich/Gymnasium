// successfully tested the function 1/17/23

const productExceptSelf = (nums) => {
    let result = [];
    for (let x = 0; x < nums.length; x++){
        let newVal = 1;
        for (let y = 0; y < nums.length; y++){
            if (y !== x){
                newVal *= nums[y]
            }
        }
        result.push(newVal)
    }
    return result
};

console.log(productExceptSelf([1,2,3,4])) // [24, 12, 8, 6]