/* 303 - Longest Repeating Character Replacement
Given a string s and an integer k. You can choose any character of the string and change it to any 
other uppercase character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter
you can get after performing the above operations.

Input:  String, Integer
        s ~ input string
        k ~ Number of operations

Output: Integer
Example
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

Constraints
N ~ length of input string
k ~ Number of operations

Time Complexity: O(N)
Auxiliary Space Complexity: O(k)

Ideas: 

1. Expand the window one by one using a for loop and a pointer named x,
which moves slowly, and a pointer y, which moves out to expand the window. 
The y pointer expands inside a for loop as well. 
2. Keep a hash of the letters in the window. Each character being operated on is added to the hash
along with the number of times the character has been seen.
3. Let k be a state variable. If the letter in the string being operated on is unique,
i.e. the hash does not have the letter. When a new, unique character is added to the window, 
then decrement k. 
4. If k ever becomes negative, then we have run out of modifications we can use to change the string so that all
characters are the same. The window must be updated. If the character evicted from the start of the window 

*/

const characterReplacement = (s, k) => {
        let left = 0;
        let right = 0;
        // init count of most frequent char in the window
        let maxCharCount = 0;
        const visited = {};
        while ( right < s.length){
                const char = s[right];
                // when encountering a char
                // add the char to a map and increment its count 
                visited[char] = visited[char] ? visited[char] + 1 : 1;
                // if the frequency of the char is greater than the current maxCharCount
                if (visited[char] > maxCharCount) {
                        maxCharCount = visited[char];
                }
                if ( right - left + 1 - maxCharCount > k){
                        visited[s[left]]--
                        left++
                }
                right++
        }
        return right - left;
}

console.log(characterReplacement("ABAB", 2)) // 4
console.log(characterReplacement("AABABBA", 1)) // 4
console.log(characterReplacement("google", 1)) // 3
console.log(characterReplacement('wakeforestuniversity', 1)) // 2
