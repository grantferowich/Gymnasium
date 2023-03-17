# Tell me about a time you had to overcome a roadblock?

Should take one minute; minute and a half at most

##### Prompt

Say: "Tell me about a time you had to overcome a roadblock? What did you do?

##### Do you hear these things?

- *Identify*: Does the interviewee discuss their competencies based on what you have asked them? Competencies include:
   - Technical Skills (libraries, languages, etc.)
   - Interpersonal Skills  


- *Prove*: Does the interviewee provide a _specific_ example (past experience or hypothetical scenario)  to showcase competencies and/or fit? Is it presented in the form of a story (punchline, beginning, middle, positive end)?


- *Close*: Does the interviewee showcase why the company should hire them and how their skills/experience/values will add value to and align with the team/company? Does the interviewee showcase what they have learned in "Prove" and how they will apply it to the new role?

# 214 - Random Node Value from Linked List

Given the head node of a singly linked list, return the value of one of the
nodes at random from the linked list.

The node value that is returned must be fairly random. How can we test this out?

# Example

```javascript

       (1) -> (5) -> (7) -> (10)
        ^
        |
Input: (1)
Output: 5

// If we were to call the function on the above linked list 100 times, we would
// expect the frequency of each node value to return approximately 25 times.
// Should resemble:

{
  1: 25
  5: 25
  7: 25
  10: 25
}

```

# Constraints

```
Provide if asked:

- Time Complexity: O(N)
- Auxiliary Space Complexity: O(N)

However, if time permits, or if you'd just like to challenge the interviewee:

- Time Complexity: O(N)
- Auxiliary Space Complexity: O(1)
- You can only pass through the linked list once

```

# Additional Details (provide if asked or bring up on your own):

* The size of the linked list will be potentially up to 100,000 nodes in length
  * What does this mean/why is this important?
    * Can't use recursion. We'll run out of calls in the call stack. Most
      language have on the order of 1,000 to 10,000 calls in the call stack
  * If the interviewee doesn't bring this up, but begins to go down the route
    of using a recursive approach, ask the question: "How could this potentially
    fail?"
* The values of the nodes in the linked list are unique
* Reminder: it is a singly linked list (only has **val** and **next** properties)
* If they ask about the structure of the linked list, you can let them know that
  the class used to construct each node has properties:
  * val {Int}
  * next {Node}

# Notes

### O(N) Auxiliary Space Approach

There are multiple ways we can do this, one method is to iterate through all of
the elements in the linked list and then push the values to an array. Then, take
Math.random (most languages give a random float between 0 and 1; 0 is inclusive,
1 is excluded). Then multiple that by the length of this array. Floor that
resulting float, and use this to return the element of the array at this index.

Another linear (and two-pass) approach is to iterate through the linked list and
count up how many nodes exist. Then, use the earlier Math.random multiplied by
the number of nodes and floor approach to get an index. Then, iterate through
the linked list again, traveling as far as the index. Return the node associated
with the calculated index.  

### O(1) Auxiliary Space (One-pass) Approach

Set an int variable called **encountered** to 0.

Create a variable called **result** and set to null.

Iterate through the linked list. At each node, increment the **encountered**
variable by 1. Divide 1 by **encountered**. This is your **probability**.

Math.random gives you a float between 0 and 1. Calculate Math.random. If this
float is less than your **probability**, set result to the current node value.

After iterating through the entire linked list, return result.

#### Proof:
Consider the `i`(th) item in the list. We show that the probability of selecting this item as the output, `p(i)`, is `1/n` where `n` is the list's size.

Selecting item `i` as the output means upon iterating item `i`, the value of `Math.random` forced us to set the result to `i` and after that for all other values higher than `i`, the output of Math.random forces us not to update the result. So we can write:

```
p(i) = p1 . p2

Where: 
- p1= probability of Math.random < 1/i upon iterating item i
- p2= probability of Math.random > 1/j upon iterating item j for all i < j <= n.

Assuming Math.random has normal distrubution, p1 = `1/i`

Therefore: 

p(i) = 1/i * [ i/(i+1) * (i+1)/(i+2) * ... (n-1)/(n) ] = 1/n

Therefore p(i) = 1/n.
```

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

let head = new ListNode(1);
head.next = new ListNode(5);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(10);

const returnRandomNodeValue = (head) => {
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
    ListNode head = new ListNode(1);
    head.next = new ListNode(5);
    head.next.next = new ListNode(7);
    head.next.next.next = new ListNode(10);

    System.out.println("RESULT: " + returnRandomNodeValue(head));
  }

  public static int returnRandomNodeValue(ListNode head) {
    // TODO
    return -1;
  }
}
```

```python
# Python
class ListNode:
    def __init__(self, val=None):
        self.val = val
        self.next = None

head = ListNode(1)
head.next = ListNode(5)
head.next.next = ListNode(7)
head.next.next.next = ListNode(10)

def return_random_node_value(head):
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
    ListNode head = new ListNode(1);
    head.next = new ListNode(5);
    head.next.next = new ListNode(7);
    head.next.next.next = new ListNode(10);

    Console.WriteLine(ReturnRandomNodeValue(head));
  }

  public static int ReturnRandomNodeValue(ListNode head) {
    // TODO
    return -1;
  }
}
```

# Solution Code

```javascript
class ListNode {
  constructor(val) {
    this.val = val;
    this.nIntext = null;
  }
}

let head = new ListNode(1);
head.next = new ListNode(5);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(10);



// O(N) Aux Space Approach

const returnRandomNodeValue = (head) => {
  const items = [];

  let current = head;

  while (current !== null) {
    items.push(current.val);
    current = current.next;
  }

  return items[Math.floor(Math.random() * items.length)];
}

let freq = {};

for (let i = 0; i < 1000; i++) {
  let sol = returnRandomNodeValue(head);
  if (sol in freq) {
    freq[sol]++;
  } else {
    freq[sol] = 1;
  }
}

console.log("FREQ: ", freq);



// O(1) Aux Space, One-pass Approach

const returnRandomNodeValueOnePass = (head) => {
  let encountered = 0;
  let result = null;

  let current = head;

  while (current !== null) {
    encountered++;

    if (Math.random() < (1 / encountered)) {
      result = current.val;
    }

    current = current.next;
  }

  return result;
}

let freqConst = {};

for (let i = 0; i < 1000; i++) {
  let sol = returnRandomNodeValueOnePass(head);
  if (sol in freqConst) {
    freqConst[sol]++;
  } else {
    freqConst[sol] = 1;
  }
}

console.log("FREQ: ", freqConst);
```
