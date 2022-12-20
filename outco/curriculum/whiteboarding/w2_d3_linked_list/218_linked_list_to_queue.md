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

# 217 - Linked List to Queue

Implement a Linked List data structure with addToTail and removeFromHead methods.

Then use that Linked List data structure to implement a Queue data structure
with enqueue and dequeue methods.

# Example
```
No input or output cases. Instead, upon implementation of the Linked List, and
then Queue class, you should be able to run the following commands.


ll = instance of Linked List class.

ll.addToTail(1)
ll.addToTail(5)
ll.addToTail(7)
ll.addToTail(10)

print out ll.removeFromhead() => 1
print out ll.removeFromhead() => 5
print out ll.removeFromhead() => 7
print out ll.removeFromhead() => 10

Same thing should be accomplished with the Queue as well


q = instance of Queue class.

q.enqueue(1)
q.enqueue(5)
q.enqueue(7)
q.enqueue(10)

print out q.dequeue() => 1
print out q.dequeue() => 5
print out q.dequeue() => 7
print out q.dequeue() => 10
```

# Constraints

```
Time Complexity: addToTail - O(1)
                 removeFromHead - O(1)
                 enqueue - O(1)
                 dequeue - O(1)

Auxiliary Space Complexity: O(N) <-- refers to how many elements are in the
linked list or queue at any given time
```

Each `ListNode` has the following properties:

```
ListNode {
  val : Integer
  next: null/ListNode
}
```

# Solution

- Begin with implementing a ListNode class
  - ListNode class should have **val** and **next** properties
- Instantiate a Linked List class
  - Linked List class should have **head** and **tail** properties
  - Create two methods called **addToTail** and **removeFromhead**
    - **addToTail** method
      - takes an input of an integer value
      - begin by creating a new ListNode instance with that given value (newNode)
      - check if the **tail** property is null
        - if it is, set both **head** and **tail** to that newNode
        - if not, set the current **tail**'s next property to newNode, then
          update **tail** to be **tail**.next.
    - **removeFromHead** method
      - if the **head** property is null, just return null
      - if not, set a toReturn variable to the **head** node
      - then set **head** to **head**.next
      - if **head** is now, null, we have just removed the last node from the
        linked list. set the **tail** also to be null
      - return the toReturn
- Instantiate a Queue class
  - create an instance of the Linked List inside the Queue class as a property
  - use the Linked List class's **addToTail** and **removeFromHead** methods to
    implement the **enqueue** and **dequeue** methods

# Code

```javascript
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    let newNode = new ListNode(val);
    if (this.tail === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeFromHead() {
    if (this.head === null) {
      return null;
    } else {
      let toReturn = this.head;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return toReturn
    }
  }
}

class Queue {
  constructor() {
    this.ll = new LinkedList();
  }

  enqueue(val) {
    this.ll.addToTail(val);
  }

  dequeue() {
    let result = this.ll.removeFromHead();
    if (result) {
      return result.val;
    } else {
      return null;
    }
  }
}
```
