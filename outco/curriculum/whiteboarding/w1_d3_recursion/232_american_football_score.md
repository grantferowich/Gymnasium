# Tell me about a time when a fellow coworker was behind on their tasks. How did this affect you? How did you handle the situation?

Should take one minute; minute and a half at most

##### Prompt

Say: "Tell me about a time when a fellow coworker was behind on their tasks. How did this affect you? How did you handle the situation?"

##### Do you hear these things?

- _Identify_: Does the interviewee discuss their competencies based on what you have asked them? Competencies include:

  - Technical Skills (libraries, languages, etc.)
  - Interpersonal Skills

- _Prove_: Does the interviewee provide a _specific_ example (past experience or hypothetical scenario) to showcase competencies and/or fit? Is it presented in the form of a story (punchline, beginning, middle, positive end)?

- _Close_: Does the interviewee showcase why the company should hire them and how their skills/experience/values will add value to and align with the team/company? Does the interviewee showcase what they have learned in "Prove" and how they will apply it to the new role?

# 315 - American Football Score

In a simplified game of American football, teams score points by either
achieving a touchdown (7 points) or a field goal (3 points).

Given the score for a single team, please return how many different permutations
of touchdowns and/or field goals exist in order to arrive at that score.

```
Input: Integer
Output: Integer
```

# Examples

```
Input:  10
Output: 2

Explanation: For a score of 10, the output would be 2. The 2 ways to arrive at
this score is to:

1) Score a field goal (3 points) and then touchdown (7 points)
2) Score a touchdown (7 points) and then field goal (3 points)


Input: 21
Output: 2

Explanation: For a score of 21, the output would be 2. The 2 ways to arrive at
this score is to:

1) Score 7 field goals (3 * 7 points)
2) Score 3 touchdowns (7 * 3 points)


Input:  16
Output: 4

Explanation: For a score of 16, the output would be 4. The 4 ways to arrive at
this score is to:

1) Score 1 touchdown (7 points) and 3 field goals (3 * 3 points)
2) Score 1 field goal (3 points), then 1 touchdown (7 points), and then 2 field goals (2 * 3 points)
3) Score 2 field goals (2 * 3 points), then 1 touchdown (7 points), and lastly 1 field goal (3 points)
4) Score 3 field goals (3 * 3 points) and then 1 touchdown (7 points)


```

# Constraints

```
Time Complexity: O(2^N)
Auxiliary Space Complexity: O(N)
```

# Notes

- Do not provide the constraints unless asked
- The input score is between 0 (inclusive) and 100 (inclusive)
- In the recursive tree below, we're starting at 10 and then attempting to
  arrive at 0. The recursive tree doesn't necessarily need to go in this direction.
  We could also start at 0 and then attempt to reach 10. We'll either subtract 3
  and 7 or add 3 and 7. Both approaches work. Be open to how the interviewee
  chooses to proceed.
- If interviewee is stuck, encourage them to begin diagramming out a recursive
  tree. Start with the root node. Ask them what branches would come off of that
  initial root node.

# Solution

Let's use this recursive tree to illustrate how we could solve for an input of 10:

```
                                    10
                        /                    \
                      7                        3
            /                 \          /           \
           4                    0       0              -4
      /         \
     1            -3
  /     \
-2      -7
```

A couple things are going on here. We begin with the root node of the recursive
tree being our input. In this case, that's 10. We also instantiate a result
variable and set it equal to 0.

From there, there are two options. We can either score a field goal or a
touchdown to decrease that score. You can see that the left branches are field
goals because we subtract 3 while the right branches represent the scoring of a
touchdown because we subtract 7.

We then continue performing those same branches at each recursive call.

Eventually, we arrive at two different types of base cases.

In one case, we reach 0. This represents a valid path. For example, from the
10 -> 7 -> 0, we scored a field goal (3 points) and then a touchdown (7 points).
At this point, we increment the result.

In the other base case, we overshoot the 0, arriving at a negative number. In
this base case, we'll still want to terminate recursion, but now we do not
increment the result variable as we do not have a valid path. For example, look
at the 10 -> 3 -> -4 path. We scored two touchdowns (2 \* 7 points), which does
not add up to 10.

# Code

```javascript
const howManyWays = (score) => {
	let result = 0;

	const findWays = (current) => {
		if (current < 0) {
			return;
		}
		if (current === 0) {
			result += 1;
			return;
		}

		findWays(current - 3);
		findWays(current - 7);
	};

	findWays(score);

	return result;
};
```

```javascript
// Without Helper Method
function americanFootball(score) {
	if (score < 0) return 0;
	if (score === 0) return 1;

	return americanFootball(score - 3) + americanFootball(score - 7);
}
```

```java
class HowManyWays {
  private static int result = 0;

  private static void findWays(int current) {
    if (current == 0) {
      result++;
      return;
    }
    if (current < 0) {
      return;
    }

    findWays(current - 3);
    findWays(current - 7);
  }

  public static int compute(int score) {
    findWays(score);
    return result;
  }
}
```
