/* 302 - Shortest Substring With 3 Unique Characters
Given a string, return the shortest substring that has at least 3 unique characters, or false if there is no such string

Input: String
Output: String or Boolean
Example
Input: aabaca => Output: bac
Input: abaacc => Output: baac
Input: abc => Output: abc
Input: aabb => Output: False
Constraints
N ~ Length of input string
K ~ Number of unique characters in input string

Time Complexity: O(N)
Auxiliary Space Complexity: O(K)
s consists of English letters

 */

const shortestWith3UniqueChars = (s) => {
  let left = 0;
  let right = 0;
  let bestLeft = 0;
  let bestRight = Infinity;
  let characters = {};
  let numberOfUniques = 0;

  while (right < s.length){
    // hunt phase
    // if the invariant is true..
    if (numberOfUniques < 3){
      let charCount = characters[s[right]] || 0;
      if (charCount === 0){
        numberOfUniques++
      }
      characters[s[right]] = charCount + 1;
      right += 1;
    }

    // catchup phase
    // while the invariant is broken..
    while (numberOfUniques >= 3){
      if (right - left < bestRight - bestLeft){
        bestLeft = left;
        bestRight = right;
      }
      let charCount = characters[s[left]] || 0;
      // this char is unique within the current substring
      if (charCount === 1){
        numberOfUniques--;
      }
      characters[s[left]] = charCount - 1;
      left += 1;
    }
  }

  console.log('bestLeft' ,bestLeft)
  console.log('bestRight', bestRight)
  if (bestRight !== Infinity){
    return s.slice(bestLeft, bestRight);
  } else { 
    return false;
  }
}

// Input: aabaca => Output: bac
// Input: abaacc => Output: baac

console.log(shortestWith3UniqueChars('aabaca')) // 'bac'