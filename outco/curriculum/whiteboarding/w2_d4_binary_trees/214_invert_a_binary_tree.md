# Why should we hire you?

Should take one minute; minute and a half at most

##### Prompt

Say: "Why should we hire you?"

##### Do you hear these things?

- _Identify_: Does the interviewee discuss their competencies based on what you have asked them? Competencies include:

  - Technical Skills (libraries, languages, etc.)
  - Interpersonal Skills

- _Prove_: Does the interviewee provide a _specific_ example (past experience or hypothetical scenario) to showcase competencies and/or fit? Is it presented in the form of a story (punchline, beginning, middle, positive end)?

- _Close_: Does the interviewee showcase why the company should hire them and how their skills/experience/values will add value to and align with the team/company? Does the interviewee showcase what they have learned in "Prove" and how they will apply it to the new role?

# 214 - Invert a Binary Tree

Given a binary tree root node, invert the binary tree (mirror) and return back the root node.

```
Input: Node in a Binary Tree
Output: Node in a Binary Tree
```

# Example

Input:
![InvertBinaryTree1](http://res.cloudinary.com/outco-io/image/upload/v1521248026/InvertBinaryTree1.png)

Output:
![InvertbinaryTree2](http://res.cloudinary.com/outco-io/image/upload/v1521248026/InvertBinaryTree2.png)

# Constraints

```
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
```

Binary Tree Node has the following properties:

1. value (Integer)
2. left (Binary Tree Node, default null)
3. right (Binary Tree Node, default null)

Must swap the entire node instances, not just their values

# Code Samples to Use for Binary Tree Construction

Copy/paste these chunks directly into Replit

```javascript
// JavaScript

// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// DO NOT EDIT
// generate tree from array
function deserialize(arr) {
	if (arr.length === 0) {
		return null;
	}
	let root = new TreeNode(arr[0]);
	let queue = [root];
	for (let i = 1; i < arr.length; i += 2) {
		let current = queue.shift();
		if (arr[i] !== null) {
			current.left = new TreeNode(arr[i]);
			queue.push(current.left);
		}
		if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
			current.right = new TreeNode(arr[i + 1]);
			queue.push(current.right);
		}
	}
	return root;
}

// DO NOT EDIT
const arr = [1, 2, 3, null, null, 4, 5];

const sampleTree = deserialize(arr);

const invert = (root) => {
	// TODO
};
```

```java
import java.util.*;
// Java

// DO NOT EDIT
// TreeNode class for a binary tree node
class TreeNode {
  public int value;
  public TreeNode left;
  public TreeNode right;

  public TreeNode(int value){
    this.value = value;
  }
}


class Main {

  // DO NOT EDIT
  public static int[] arr = {1, 2, 3, -1, -1, 4, 5};

  public static TreeNode sampleTree = deserialize(arr);

  public static void main(String[] args) {
    System.out.println("RESULT: " + invert(sampleTree));
  }

  // DO NOT EDIT
  // generate tree from array, null value are represented as -1
  public static TreeNode deserialize(int[] arr) {
    if (arr.length == 0) {
      return null;
    }
    TreeNode root = new TreeNode(arr[0]);
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(root);
    TreeNode current;
    for (int i = 1; i < arr.length; i += 2) {
      current = queue.remove();
      if (arr[i] != -1) {
        current.left = new TreeNode(arr[i]);
        queue.add(current.left);
      }
      if (arr[i + 1] != -1 && (i + 1) < arr.length) {
        current.right = new TreeNode(arr[i + 1]);
        queue.add(current.right);
      }
    }
    return root;
  }

  public static int invert(TreeNode root) {
    // TODO
    return -1;
  }
}
```

```python
# Python

# DO NOT EDIT
# Node class for a binary tree node
class TreeNode:
    def __init__(self, value=None):
        self.value = value
        self.left = None
        self.right = None


# DO NOT EDIT
# generate tree from list
def deserialize(lst):
    if len(lst) == 0:
        return None
    root = TreeNode(lst[0])
    queue = [root]
    i = 1
    while i < len(lst):
        current = queue.pop(0)
        if lst[i] is not None:
            current.left = TreeNode(lst[i])
            queue.append(current.left)
        if i + 1 < len(lst) and lst[i + 1] is not None:
            current.right = TreeNode(lst[i + 1])
            queue.append(current.right)
        i += 2
    return root

# DO NOT EDIT
lst = [1, 2, 3, None, None, 4, 5]

sample_tree = deserialize(lst)

def invert(root):
  # TODO
  pass
```

```csharp
// C#
using System;
using System.Linq;
using System.Collections.Generic;

// DO NOT EDIT
// TreeNode class for a binary tree node
class TreeNode {
  public int value;
  public TreeNode left;
  public TreeNode right;

  public TreeNode(int value){
    this.value = value;
  }
}

class Program {

  // DO NOT EDIT
  public static int[] arr = {1, 2, 3, -1, -1, 4, 5};

  public static TreeNode sampleTree = Deserialize(arr);

  public static void Main (string[] args) {
    Console.WriteLine("RESULT: " + Invert(sampleTree));
  }

  // DO NOT EDIT
  // generate tree from array, null value are represented as -1
  public static TreeNode Deserialize(int[] arr) {
    if (arr.Length == 0) {
      return null;
    }
    TreeNode root = new TreeNode(arr[0]);
    Queue<TreeNode> queue = new Queue<TreeNode>();
    queue.Enqueue(root);
    TreeNode current;
    for (int i = 1; i < arr.Length; i += 2) {
      current = queue.Dequeue();
      if (arr[i] != -1) {
        current.left = new TreeNode(arr[i]);
        queue.Enqueue(current.left);
      }
      if (arr[i + 1] != -1 && (i + 1) < arr.Length) {
        current.right = new TreeNode(arr[i + 1]);
        queue.Enqueue(current.right);
      }
    }
    return root;
  }


  public static int Invert(TreeNode root) {
    // TODO
    return -1;
  }
}
```

# Solution

1. Use Pure Recursion to solve this problem. Our only input is `node`.

   - For the base case, if input `node` is null, return `null`, otherwise, swap the `left` and `right` child.

   - Use a temp variable if necessary.

   - Call the function recursively on both the `node.left` and `node.right`.

2. Return the input `node`.

# Code

```python

# Python Solution:

def invert_tree(node):
    if node is None:
        return
    invert_tree(node.left)
    invert_tree(node.right)
    node.right, node.left = node.left, node.right
    return node

   #alternatively you could flip/swap the nodes first then invert the left, invert right.

```

```javascript
// Javascript Solution:

const invert = (root) => {
	if (root === null) {
		return;
	}
	const temp = root.left;
	root.left = root.right;
	root.right = temp;

	invert(root.left);
	invert(root.right);

	return root;
};
console.log(sampleTree, 'Initial tree');
console.log(invert(sampleTree), 'Inverted Tree');
```

# Notes

The creator of homebrew couldn't solve this problem in a Google Interview:
https://twitter.com/mxcl/status/608682016205344768

# Resources

https://leetcode.com/problems/invert-binary-tree/
