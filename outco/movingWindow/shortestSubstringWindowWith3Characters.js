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




































// py sol
/* def shortest_with_3_unique(s):
  l, r = 0, 0
  best_l, best_r = 0, float('inf')
  characters = {}
  num_unique = 0

  while r < len(s):
    # hunt phase
    if num_unique < 3:
      char_count = characters.get(s[r], 0)
      if char_count == 0: # this is a new character
        num_unique += 1
      characters[s[r]] = char_count + 1
      r += 1

    # catchup phase
    while (num_unique >= 3):
      if r - l < best_r - best_l:
        best_l, best_r = l, r
      char_count = characters.get(s[l], 0)
      if char_count == 1: # this character is unique within the current substring
        num_unique -= 1
      characters[s[l]] = char_count - 1
      l += 1

  if best_r != float('inf'):
    return s[best_l:best_r]
  else:
    return False */