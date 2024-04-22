/*
 * 
 * 350 million Americans.
 * 18 million Americans work in tech. 
 * 13.5 million Americans code professionally, 
 * assuming 75% of people who work in tech are full-time engineers.
 * Approximately 3.8% of Americans code.
 * 
 * Successfully tested the function 1/19/23.
 * 
 * Complexity Analysis:
 * Time: O(MN)
 * Space: O(MN)
 * 
 * input: 'abbc'
 * output: 2
 * "abbc" 
 *  ^ ^^
 * "abbc"
 *  ^^ ^
 * 
 * Input 1:  "rabbbit", "rabbit"
 * // 3
 * ideas
 * // randomly pop off chars until the input S length eqals target substring T
 * // pop off the element at the end until the input S length equals target substring T
 * // move a pointer from the end of the input S 
 *      =>  s.length - index 
 * //   s.splice(s.length-index-1, 1)
 * base case: S.splice(S.length - index  - 1, 1) === T
 *  return 1
 */

const distinctSubsequences = (stringX, targetY) => {
    let cache = {};
    let n = stringX.length;
    let m = targetY.length;
    
    const helper = (x,y) => {

        // when x (the right pointer) reaches the end of the string
        if (x === stringX.length){
            // return 1 if y is at the end of the target
            return y === targetY.length ? 1 : 0;
        }

        if (y === targetY.length){
            return 1;
        }

        let key = x.toString() + "_" + y.toString();
        if (cache[key]){
            return cache[key];
        }

        // recursive cases 
        let ans = 0;
        if (stringX[x] === targetY[y]){
            ans += helper(x + 1, y + 1) + helper(x + 1, y);
        } else {
            ans += helper(x + 1, y);
        }
        // store the results of the recursive calls in the cache
        return cache[key] = ans;
    }
    return helper(0, 0)
}

console.log(distinctSubsequences('abbc', 'abc')); // 2
console.log(distinctSubsequences('rabbbit', 'rabbit')); // 3
console.log(distinctSubsequences("babgbag", "bag")) // 5 