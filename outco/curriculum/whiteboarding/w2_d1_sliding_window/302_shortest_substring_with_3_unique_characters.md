# Last project

#### Prompt

Say: "Tell me about the last project you worked on."

- *Identify*: Does the interviewee discuss their competencies based on what you have asked them? Competencies include:
   - Technical Skills (libraries, languages, etc.)
   - Interpersonal Skills  


- *Prove*: Does the interviewee provide a _specific_ example (past experience or hypothetical scenario)  to showcase competencies and/or fit? Is it presented in the form of a story (punchline, beginning, middle, positive end)?


- *Close*: Does the interviewee showcase why the company should hire them and how their skills/experience/values will add value to and align with the team/company? Does the interviewee showcase what they have learned in "Prove" and how they will apply it to the new role?

# 302 - Shortest Substring With 3 Unique Characters

Given a string, return the shortest substring that has at least 3 unique
characters, or false if there is no such string

```
Input: String
Output: String or Boolean
```

# Example
```
Input: aabaca => Output: bac
Input: abaacc => Output: baac
Input: abc => Output: abc
Input: aabb => Output: False
```

# Constraints
```
N ~ Length of input string
K ~ Number of unique characters in input string

Time Complexity: O(N)
Auxiliary Space Complexity: O(K)
```

`s` consists of English letters

# Solution
Use a sliding window approach, expanding as long as you have fewer than 3 unique characters, and contracting as long as you have 3 or more unique characters.

Use a dictionary to keep track of the characters present in your current substring, and a variable `num_unique` to count the number of unique characters in the current substring without iterating over the dictionary.

Keep track of the indexes of the optimal solution along the way, and use them to return the substring at the end.

# Code
Solution in Python:

```python
def shortest_with_3_unique(s):
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
    return False
```
