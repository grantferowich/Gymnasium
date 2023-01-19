/**
 * Successfully tested the function 1/19/23.
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

const distinctSubsequencesX1 = (S, T) => {
    let cache = {};
    let n = S.length;
    let m = T.length;
    
    const helper = (x,y) =>{
        if (x === n){
            return y === m ? 1 : 0;
        }
        if (y === m){
            return 1;
        }
        let key = x.toString() + "_" + y.toString();
        if (cache[key]){
            return cache[key];
        }
        let ans = 0;
        if (S[x] === T[y]){
            ans += helper(x + 1, y + 1) + helper(x + 1, y)
        } else {
            ans += helper(x + 1, y)
        }
        return cache[key] = ans;
    }
    return helper(0, 0)
}
console.log(distinctSubsequencesX1('abbc', 'abc')); // 2
console.log(distinctSubsequencesX1('rabbbit', 'rabbit')); // 3
console.log(distinctSubsequencesX1("babgbag", "bag")) // 5 