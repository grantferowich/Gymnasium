/*
 * Successfully tested function across four test cases 2/7/23. 
 * BitFlip
 *
 *  Given an array of binary values (0 and 1) and N number of flips that
 *  can convert a 0 to a 1, determine the maximum number of consecutive 1's
 *  that can be made.
 *
 *  Input: arr {Array}
 *  Input: n {Integer}
 *  Output: Integer
 *
 *  Example: bitFlip([0,1,1,1,0,1,0,1,0,0], 2)
 *  Result: 7
 * 
 * increase the window size to find 0s
 * 
    // decrease window size once n flips are used up
    increment the left pointer (shrink total size) until finding a 0
    once the zero is found on the left side the window can increase again to find 0s to the right
 */

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)

function bitFlipAdvanced (arr, n) {
    let max = 0;
    let left = 0;
    let right = 0;
    let toggles = 0;
    
    while (right < arr.length){
      if (arr[right] === 0) {
        toggles++;
      }
      
      while (toggles > n){
        if (arr[left] === 0) {toggles--;}
        left++
      }
      
      right++;
      max = Math.max(max, right -left )
    }
    return max
}

console.log(bitFlipAdvanced([0,1,1,1,0,1,0,1,0,0], 2)) // 7
console.log(bitFlipAdvanced([1,1,1,0,0,0,1,1,1,1,0], 2)) // 6
console.log(bitFlipAdvanced([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))  // 10
console.log(bitFlipAdvanced([1,1,1,1,0], 1)) // 5