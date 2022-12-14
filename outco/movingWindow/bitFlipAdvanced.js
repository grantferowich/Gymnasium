/*
 *  BitFlip
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
 */

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)

// passed tests 12/14/22
function bitFlip (arr, n) {
 
    let max = 0;
    let left = 0;
    let right = 0;
    let toggles = 0;

    while (right < arr.length){
      if (arr[right] === 0) { toggles++;}
      right++;
      while (toggles > n){
        if (arr[left] === 0) {toggles--;}
        left++
      }
      max = Math.max(max, right -left )
    }
    return max
}

console.log(bitFlip([0,1,1,1,0,1,0,1,0,0], 2))