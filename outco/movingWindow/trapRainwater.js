/* 
42. Trapping Rain Water



Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.

Input: height = [4,2,0,3,2,5]
Output: 9

** after implementing with a moving window
implement with a stack
 */
 

const trapRainwater = (array) => {
    let result = 0;
    let length = array.length;
    let leftMax = array[0];
    let rightMax = array[length - 1];
    // let leftArr = new Array(length);
    let leftArr = []
    leftArr[0] = array[0];
    // let rightArr = new Array(length);
    let rightArr = []
    rightArr[length - 1] = array[length - 1];
    // i points to front
    for (let i=1; i<array.length; i++){
        leftMax = Math.max(leftMax, array[i]);
        leftArr[i] = leftMax;
    }
    // k points to back 
    for (let k = array.length - 2; k >= 0; k--){
        rightMax = Math.max(rightMax, array[k]);
        rightArr[k] = rightMax;

    }

    for (let j = 0; j < array.length; j++){
        result = result + (Math.min(leftArr[j], rightArr[j]) - array[j])
    }
    return result;

}

console.log(trapRainwater([0,1,0,2,1,0,1,3,2,1,2,1])) // 6