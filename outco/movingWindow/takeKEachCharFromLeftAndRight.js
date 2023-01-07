/* 
2516.
Medium
Take K of Each Character from Left and Right


input: 'aabaaaacaabc', k
output: 8
find minimum number of moves when you can only take from the
right most side and left most side
 
input: string
 output: number

//recognition: sliding window front and back
// set up a charMap or hash with 'a' 'b' and 'c' having k as the value
// values must be k*2
// e.g. when k is 1, { 'a':2, 'b':2, 'c':2}

Input: s = "aabaaaacaabc", k = 2
Output: 8
Explanation: 
Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed.


right        ]                
left           [                 
s     = 'a a b a a a a c a a b c'

map
"a": 8
"b": 
"c": 


k = 2  -- must have a, b and c each appear 2 times 

window  
window size:  4
s.length() = 12
result = s.length - windowSize
minResult = 8

- when moving right, decrease values in dictionary
- when moving left, increase values in dictionary

Steps: 
1) count characters and store in dict/map
2) check for invalid input : if the value for any key is less than k 
3) apply the sliding window technique for finding the max window size 
where characters outside the window each have a minimum of k occurrences
    4) init left, right pointers to 0
       update the dictionary to exclude value at right ptr
    5) while current character count < k 
       update left pointer + 1 
       update dictionary to increase count at left ptr
    6) calculate the window size
       window = right - left + 1
    7) update min result = s.length - window size 
*/

const takeKCharacters = (string, k) => {
    let left = 0;
    let right = 0;
    let result = string.length;
    let counts = {};

    // count characters
    for (let x = 0; x < string.length; x++){
        let char = string[x];
        counts[char] = counts[char] + 1 || 1;
    }

    // check valid inputs
    for (let key in counts){
        if (counts[key] < k){
            return -1;
        }
    }

    //sliding window
    for ( right = 0; right < string.length; right++){
        let char = string.charAt(right);
        counts[char]--
        while (counts[char] < k){
            counts[char]++
            left++
        }
        let windowSize = right - left - 1;
        result = Math.min(result, string.length - windowSize)
    }
    return result;
}
console.log(takeKCharacters("aabaaaacaabc",2)) // expected output: 8