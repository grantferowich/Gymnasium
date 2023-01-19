/* 
// Successfully tested the function 1/19/23.

// Time complexity: O(N^2)
// Space complexity: O(N^2)
Input:  "vtvvv"
Output: 4

Longest palindromic subsequence here is "vvvv"


Input:  "pwnnb"
Output: 2

Longest palindromic subsequence here is "nn"


Input:  "ttbtctcbt"
Output: 7

Longest palindromic subsequence here is "tbtctbt"

input: 'hannah'
output: 6
// input: string
// output: number

input: "g"
output: 1
number is a thing being maximized 
*/

const longestPalindromicSubsequence = (string) => {
    let cache = {}
    let left = 0;
    let right = string.length - 1;

    const find = (left, right) => {
        let key = left.toString() + "_" + right.toString()
        if (key in cache){
            return cache[key];
        }
        // base case: 
        // there is one char
        if (left === right){
            return 1; 
        }
        // base case:
        // there are two chars
        if (left === right - 1 && string[left] === string[right]){
            return 2;
        }
        // recursive case: chars indicate palindrome
        // set cache[key] to 2 plus the result of the recursive call on left+1, right-1
        if (string[left] === string[right]){
            cache[key] = 2 + find(left + 1, right -1 )
            return cache[key];
        }
        cache[key] = Math.max(find(left + 1, right), find(left, right - 1));
        return cache[key];
    }
    return find(left, right)
}
console.log(longestPalindromicSubsequence('hannah')) // 6
console.log(longestPalindromicSubsequence('vtvvv')) // 4
console.log(longestPalindromicSubsequence('g')) // 1
console.log(longestPalindromicSubsequence("tbtctbt")) // 7