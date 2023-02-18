/* 
// Successfully tested the function 1/19/23.

// The solution considers base cases, and also, the solution moves right and left pointers closer to the center
of the string at each recursive call. 

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

the general technique is to use to pointers 
the pointers start at the right and left ends of the string
when the chars at the pointers are equal,
let the number of chars in the longest palindromic subsequence increase by 1
then move both pointers toward each other

in the recursive case when the chars are NOT equal
make one function call on find(left - 1, right) and find(left, right + 1)
*/

const longestPalindromicSubsequence = (string) => {
    // create cache
    let cache = {}
    let left = 0;
    let right = string.length - 1;

    const find = (left, right) => {
        // create key
        let key = `${left},${right}`
        // check if the key is in the cache
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

        // recursive case: chars are equal (& :. palindromic )
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
console.log(longestPalindromicSubsequence('gg')) // 2
console.log(longestPalindromicSubsequence("tbtctbt")) // 7