# Last project

#### Prompt

Say: "Tell me about the last project you worked on."

- *Identify*: Does the interviewee discuss their competencies based on what you have asked them? Competencies include:
   - Technical Skills (libraries, languages, etc.)
   - Interpersonal Skills  


- *Prove*: Does the interviewee provide a _specific_ example (past experience or hypothetical scenario)  to showcase competencies and/or fit? Is it presented in the form of a story (punchline, beginning, middle, positive end)?


- *Close*: Does the interviewee showcase why the company should hire them and how their skills/experience/values will add value to and align with the team/company? Does the interviewee showcase what they have learned in "Prove" and how they will apply it to the new role?

# 303 - Longest Repeating Character Replacement

Given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

```
Input:  String, Integer
        s ~ input string
        k ~ Number of operations

Output: Integer
```

# Example
```
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
```

# Constraints
```
N ~ length of input string
k ~ Number of operations

Time Complexity: O(N)
Auxiliary Space Complexity: O(k)
```

`s` consists of English letters

# Solution

Use a sliding window approach.

In our solution, as an invariant, we will ensure that the string between pointers `l` and `r` contains some "majority character" (the most frequently seen character in the substring) in all but at most `k` spots. In other words, we guarantee that the substring `s[l:r+1]` consists of a repetition of the same one character in all but `k` spots. (Note that the problem statment asks us to find the longest such substring.)

A `count` dictionary is used to maintain the counts of characters in the current substring. This allows us to know what the current "majority" character in the substring is. By following the hunting and shrinking phases described below, we ensure that if some character `X` has the highest `count` (is the majority character), at any point in the loop iteration, the substring between `l` and `r` could be turned into a string of all `X`s by replacing at most `k` characters between `l` and `r`.

Whenever a `count` is decremented to zero, we ensure that the element is removed from the dictionary. (The use of `defaultdict` in the Python solutions below makes sure of this.) Together with our invariant, this ensures that the dictionary always has at most `k+1` entries. (If there were more than `k+1` different characters in the dictionary, there would be more than `k` non-majority characters in the substring, violating our invariant.)

In the hunting phase, we extend the `r` pointer towards the end of the string to try to obtain a longer string (recall we are trying to obtain the *longest* substring). Since this might add a new (non-majority) character, we must then potentially shrink the substring from the left to ensure the invariant from above holds.

We must perform the shrinking phase exactly when have more than `k` spots with different characters in the substring. This is captured by the inner while loop condition `r - l + 1 - max_value > k`: that is, the length of our current substring (`r - l + 1`) minus the most repeated character therein (`max_value`) exceeds the maximum number of substitutions `k`. (In a string of length `r - l + 1` that contains `max_value` of the same character, only `k` other characters are allowed to remain.)

JS Solution:

- Maintain left and right pointer, max instances of a single char, and visit counts for each char.
- for each char in string
    - increment visit count for this char
    - if new visit count is higher than max, update max
    - if length of current string without max char count is greater than k,
        - then we know the new char made it such that there are more chars missing than can be replaced by k,
        - so we will remove the first char
        - and increment left pointer
    - increment right pointer to look at next char.
- In the end, the answer is whatever the window size is. This is because we never shrink the window size.
    - As we look at new chars, we increase the window size.
    - Once we see we can no longer increase due to limitation of k, we slide the window forward.
        - In these inbetween states, it's possible the window doesn't span a valid subset,
            - but that doesn't matter because the window size at one point did span a valid set.
        - Instead, we wait until there's a possibility of a better set, which is when there is a substring with more instances of some char.


# Code
Solution I in Python:

```python
def characterReplacement(self, s: str, k: int) -> int:
        
        size = len(s)
        max_value = 0
        l = 0
        result = 0
        count = collections.defaultdict(int)
        for r in range(size):
            
            count[s[r]] += 1
            max_value = max(max_value, count[s[r]])
            
            while r - l + 1 - max_value > k:
                count[s[l]] -= 1
                l += 1
                
            result = max(result, r - l + 1); 
                
        return result
```

Solution II in Python:

```python
def characterReplacement(self, s: str, k: int) -> int:
        
        max_value = 0
        result = 0
        count = collections.defaultdict(int)
        for r in range(len(s)):
            
            count[s[r]] += 1
            max_value = max(max_value, count[s[r]])
            if result - max_value < k:
                result += 1
            else:
                count[s[r - result]] -= 1
                
        return result
```

Solution in JavaScript:

```js
const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] ? visited[char] + 1 : 1;

    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};

console.log(characterReplacement("ABAB", 2))
console.log(characterReplacement("AABABBA", 1))
```
