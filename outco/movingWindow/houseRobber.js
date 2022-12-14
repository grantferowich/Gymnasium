/**
 * 198 House Robber 
 * 
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing each
 * of them is that adjacent houses have security systems connected and it will automatically contact 
 * the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, 
 * return the maximum amount of money you can rob tonight without alerting the police.
 * 
 * input: nums = [1,2,3,1]
 * output: 4, rob house at index 0 and at index 2
 * 
 * input: [2, 7, 9, 3,1]
 * output: 12. Rob 2 + 9 +1.
 * 
 * Successfully passed two test cases 12/14/22. 
 * 
 */

const houseRobber = (array) => {

    let local = 0;
    let ultimate = 0;
    let right = 0;
    let currentIdx = 0;

    while (right < array.length){
        let value = array[right];
        local = value;
        for (let x = 0; x < array.length; x++){
            if (x - right > 1 && x - currentIdx > 1){
                local += array[x];
                currentIdx = x;
            }
        }
        ultimate = Math.max(local, ultimate);
        right++
    }

    return ultimate
}

console.log(houseRobber([1,2,3,1])) // 4
console.log(houseRobber([2, 7, 9, 3,1])) // 12