/* 
Leetcode 217
Engineered February 22, 2023
Return true if the array contains a duplicate element
Else return false

*/

const containsDuplicate = (nums) => {
    let counts = {}
    
    for (let x = 0; x < nums.length; x++){
        let num = nums[x];
        counts[num] = counts[num] + 1 || 1;
    }

    for (key in counts){
        if (counts[key] > 1){ return true}
    }
    return false
};

console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true