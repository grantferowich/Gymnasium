 // Rainwater problem

 const trap = (height) => {
        
    if ( height.length === 0){return 0;}

    let left = 0;
    let right = height.length -1;
    let leftMax = height[left];
    let rightMax = height[right];
    let sum = 0 

    while (left < right){
        if (height[left] < height[right]){
           left++;
           leftMax = Math.max(leftMax, height[left])
           sum += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            sum += rightMax - height[right];
        }

    }
    return sum;
}
// let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6