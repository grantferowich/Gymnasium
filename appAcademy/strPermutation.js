// Challenge  - implement this function with recursion 
// Found this problem on 12/13/22. 
// There was a brute force solution found which uses two for loops.
// The brute force solution runs in O(N^2) time, or quadratic time. 
// actually this brute force solution isn't really complete... 12/13/22

// come back to this problem after doing a few problems on DFS
// findPermutations("aabc")

// (12) ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", "cbaa"]
/**
 *  
 *                        ""
 *                       /  \ 
 *                     "a"  "c"
 * 
 * 
 * 
 * 
 */

const findPermutations = string => {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
        if ( i !== j ){
          let permutation = ""
          permutation += string[i] + string[j] + string[j+1] + string[i+1]
          if (permutation.length === string.length){
            result.push(permutation)
          }
        }
    }
  }
  return result;
};

console.log(findPermutations("aabc"));
