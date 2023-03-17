# If we were to ask you to take over a project on Day 1, what would you accomplish in your first week?

Should take one minute; minute and a half at most

##### Prompt

Say: "If we were to ask you to take over a project on Day 1, what would you accomplish in your first week?"

##### Do you hear these things?

- *Identify*: Does the interviewee discuss their competencies based on what you have asked them? Competencies include:
   - Technical Skills (libraries, languages, etc.)
   - Interpersonal Skills  


- *Prove*: Does the interviewee provide a _specific_ example (past experience or hypothetical scenario)  to showcase competencies and/or fit? Is it presented in the form of a story (punchline, beginning, middle, positive end)?


- *Close*: Does the interviewee showcase why the company should hire them and how their skills/experience/values will add value to and align with the team/company? Does the interviewee showcase what they have learned in "Prove" and how they will apply it to the new role?

# 217 - Intersection of Two Linked Lists

Write a function to find the node at which the intersection of two singly linked lists begins.

If there is no intersection between the two nodes, simply return `null`.


```
Input:  headA {ListNode}, headB {ListNode}
Output: {ListNode} or null
```
# Example
```
Input: 	a1, b1


A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3


Output:	c1



Input:  a1, b1

A:          a1 → a2


B:     b1 → b2 → b3


Output: null
```
# Constraints

```
Time Complexity: O(N)

Auxiliary Space Complexity: O(1)
```

Each `ListNode` has the following properties:

```
ListNode {
  val : Integer
  next: null/ListNode
}
```

Hints/Edge cases:
There could be duplicate values in either Linked List. Knowing this information, it might be best to compare the nodes themselves instead of the node.value/data itself.

# Solution

There are two solutions, both of which fulfill the time and space constraints. The **intermediate** one involves finding the length of both `Linked Lists` and the **advanced** which does not.

#### Intermediate

* 1) Loop through both `lists` starting from their `heads`, and calculate their respective lengths.
* 2) Once you have both lengths, find the difference between the two lengths.
* 3) Use the difference you computed to iterate forward on the longer list and choose that node as your new starting point
* 4) Iterate through both lists simultaneously until both pointers are equal
* 5) The pointers will either both equal the point of intersection or they will both equal `null`

#### Advanced

* 1) Initialize two pointers, `currentA` and `currentB`, and set them equal to `headA` and `headB` respectively.
* 2) Create a `while` loop, that runs when `currentA` is NOT equal to `currentB`.
* 3) Within that `while` loop,
 * a) if `currentA` is `null`, set it to be `headB`
   * else set `currentA` to `currentA.next`
 * b) if `currentB` is `null`, set it to be `headA`
   * else set `currentB` to `currentB.next`
* 4) Return either `currentA` or `currentB`


This solution works because the `while` loop will break when both `currentA` and `currentB` are equal. If there is no intersection they'll both be `null`, and if there is, they will both equal the intersection node.

# Code Samples to Use for Linked List Construction

Copy/paste these chunks directly into Replit

```javascript
// JavaScript
class ListNode {
  constructor(val) {
    this.val = val;
    this.nIntext = null;
  }
}

/*

A:          1 → 5
                   ↘
                     7 → 10
                   ↗            
B:       2 → 3 → 4

Output: 7

*/

let headA = new ListNode(1);
headA.next = new ListNode(5);
headA.next.next = new ListNode(7);
headA.next.next.next = new ListNode(10);

let headB = new ListNode(2);
headB.next = new ListNode(3);
headB.next.next = new ListNode(4);
headB.next.next.next = headA.next.next;


/*

A:       1 → 5 → 7 → 10

B:       2 → 3 → 4 → 9

Output: null

*/

let headC = new ListNode(1);
headC.next = new ListNode(5);
headC.next.next = new ListNode(7);
headC.next.next.next = new ListNode(10);

let headD = new ListNode(2);
headD.next = new ListNode(3);
headD.next.next = new ListNode(4);
headD.next.next.next = new ListNode(9);

const getIntersectionNode = (headA, headB) => {
  // TODO
}
```

```java
// Java
class ListNode {
  public int val;
  public ListNode next;

  public ListNode(int val){
    this.val = val;
  }
}

class Main {
  public static void main(String[] args) {

    /*

    A:          1 → 5
                       ↘
                         7 → 10
                       ↗            
    B:       2 → 3 → 4

    Output: 7

    */

    ListNode headA = new ListNode(1);
    headA.next = new ListNode(5);
    headA.next.next = new ListNode(7);
    headA.next.next.next = new ListNode(10);

    ListNode headB = new ListNode(2);
    headB.next = new ListNode(3);
    headB.next.next = new ListNode(4);
    headB.next.next.next = headA.next.next;


    /*

    A:       1 → 5 → 7 → 10

    B:       2 → 3 → 4 → 9

    Output: null

    */

    ListNode headC = new ListNode(1);
    headC.next = new ListNode(5);
    headC.next.next = new ListNode(7);
    headC.next.next.next = new ListNode(10);

    ListNode headD = new ListNode(2);
    headD.next = new ListNode(3);
    headD.next.next = new ListNode(4);
    headD.next.next.next = new ListNode(9);
  }

  public static ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    // TODO
    return null;
  }
}
```

```python
# Python
class ListNode:
    def __init__(self, val=None):
        self.val = val
        self.next = None

'''

A:          1 → 5
                   ↘
                     7 → 10
                   ↗            
B:       2 → 3 → 4

Output: 7

'''

headA = ListNode(1)
headA.next = ListNode(5)
headA.next.next = ListNode(7)
headA.next.next.next = ListNode(10)

headB = ListNode(2)
headB.next = ListNode(3)
headB.next.next = ListNode(4)
headB.next.next.next = headA.next.next


'''

A:       1 → 5 → 7 → 10

B:       2 → 3 → 4 → 9

Output: null

'''

headC = ListNode(1)
headC.next = ListNode(5)
headC.next.next = ListNode(7)
headC.next.next.next = ListNode(10)

headD = ListNode(2)
headD.next = ListNode(3)
headD.next.next = ListNode(4)
headD.next.next.next = ListNode(9)

def get_intersection_node(headA, headB):
  # TODO
  pass
```

```csharp
// C#
using System;

class ListNode {
  public int val;
  public ListNode next;

  public ListNode(int val){
    this.val = val;
  }
}

class Program {
  public static void Main (string[] args) {

    /*

    A:          1 → 5
                       ↘
                         7 → 10
                       ↗            
    B:       2 → 3 → 4

    Output: 7

    */

    ListNode headA = new ListNode(1);
    headA.next = new ListNode(5);
    headA.next.next = new ListNode(7);
    headA.next.next.next = new ListNode(10);

    ListNode headB = new ListNode(2);
    headB.next = new ListNode(3);
    headB.next.next = new ListNode(4);
    headB.next.next.next = headA.next.next;


    /*

    A:       1 → 5 → 7 → 10

    B:       2 → 3 → 4 → 9

    Output: null

    */

    ListNode headC = new ListNode(1);
    headC.next = new ListNode(5);
    headC.next.next = new ListNode(7);
    headC.next.next.next = new ListNode(10);

    ListNode headD = new ListNode(2);
    headD.next = new ListNode(3);
    headD.next.next = new ListNode(4);
    headD.next.next.next = new ListNode(9);
  }

  public static ListNode GetIntersectionNode(ListNode headA, ListNode headB) {
    // TODO
    return null;
  }
}
```

# Code

## Javascript Code
```javascript
function getIntersectionNode(headA, headB) {
  let currentA = headA;
  let currentB = headB;

  while(currentA != currentB) {
    if (currentA === null) {
      currentA = headB;
    } else {
      currentA = currentA.next;
    }

    if (currentB === null) {
      currentB = headA;
    } else {
      currentB = currentB.next;
    }
  }
  return currentA;
}
```

## Python Code
```python
def getIntersectionNode(headA, headB)
        
    p1 = headA
    p2 = headB
        
    while p1 != p2:

        if p1 is None:
            p1 = headB
        else:
            p1 = p1.next
                
        if p2 is None:
            p2 = headA
        else:
            p2 = p2.next
                
    return p1
```

# Resources

[Intersection of Two Linked Lists on Leetcode](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)
