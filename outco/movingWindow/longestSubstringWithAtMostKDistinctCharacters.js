/* 340-longest-substring-with-at-most-k-distinct-characters
Question

Successfully tested the function on May 18, 2023. 

https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/description/

Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example:

Given s = “eceba” and k = 2,
T is "ece" which its length is 3.

console.log(kUniqueCharacters("2eceba")) // 3
console.log(kUniqueCharacters("3aaabbb")) // -1
console.log(kUniqueCharacters("3aabbxxyyy")) // 7

Four questions of SWP

1 Under what condition does the runner move?
2 When to read temp solution?
3 How to choose the optimal solution?
4 Under what condition does the catcher move?

Under what condition does the runner move?
there are less than or equal to kInt unique characters
map.size is less or equal to kInt

When to read temp solution?
after shrinking the window

*/

const longestSubstringWithAtMostKDistinctCharacters = (str) => {
    
    let kInt = str.slice(0,1)
    let map = new Map();
    let rightPtrInt = 1;
    let leftPtrInt = 1;
    let longestSubstringInt = -Infinity;
    while (rightPtrInt < str.length){

        let char = str[rightPtrInt];
        map.set(char, (map.get(char) || 0) + 1);
        rightPtrInt++;
        


        while (map.size > kInt){

            let char = str[leftPtrInt];
            let frequencyInt = map.get(char);

            if (frequencyInt === 1){
                map.delete(char)
            }
            if (frequencyInt > 1){
                map.set(char, frequencyInt - 1)
            }
            leftPtrInt++
        }
            

        longestSubstringInt = Math.max(longestSubstringInt, rightPtrInt - leftPtrInt)  
        if (map.size < kInt){
            longestSubstringInt = -1
        }
    }
    return longestSubstringInt !== -Infinity ? longestSubstringInt : -1;
}


console.log(longestSubstringWithAtMostKDistinctCharacters("2eceba")) // 3
console.log(longestSubstringWithAtMostKDistinctCharacters("3aaabbb")) // -1
console.log(longestSubstringWithAtMostKDistinctCharacters("3aabbxxyyy")) // 7