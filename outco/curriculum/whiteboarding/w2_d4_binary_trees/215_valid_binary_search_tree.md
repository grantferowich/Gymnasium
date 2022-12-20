# Tell me about a time that you failed at work. What did you learn from it?

Should take one minute; minute and a half at most

##### Prompt

Say: "Tell me about a time that you failed at work. What did you learn from it?"

##### Do you hear these things?

- _Identify_: Does the interviewee discuss their competencies based on what you have asked them? Competencies include:

  - Technical Skills (libraries, languages, etc.)
  - Interpersonal Skills

- _Prove_: Does the interviewee provide a _specific_ example (past experience or hypothetical scenario) to showcase competencies and/or fit? Is it presented in the form of a story (punchline, beginning, middle, positive end)?

- _Close_: Does the interviewee showcase why the company should hire them and how their skills/experience/values will add value to and align with the team/company? Does the interviewee showcase what they have learned in "Prove" and how they will apply it to the new role?

# 215 - Valid Binary Search Tree

Given a binary tree root node, check if the tree is a valid binary search tree.

```
Input: Node in a Binary Tree
Output: Boolean
```

# Example

Input:
![ValidBinarySearchTree](http://res.cloudinary.com/outco-io/image/upload/v1521248026/ValidBinarySearchTree.png)

Output: False

# Constraints

```
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
```

Binary Tree Node has the following properties:

1. value (Integer)
2. right (Binary Tree Node, default null)
3. left (Binary Tree Node, default null)

# Solution

- 1. Use Helper Method Recursion

- 2. Store an `array` in the outer function's scope.

- 3. Perform an in-order depth first traversal, pushing each `node`'s values into the `array`.

- 2. Check to see if the array is sorted in ascending order.

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
const arr = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8];

const sampleTree = deserialize(arr);

const validBinarySearchTree = (root) => {
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
  public static int[] arr = {4, 2, 5, 1, 3, -1, 7, -1, -1, -1, -1, 6, 8};

  public static TreeNode sampleTree = deserialize(arr);

  public static void main(String[] args) {
    System.out.println("RESULT: " + validBinarySearchTree(sampleTree));
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

  public static int validBinarySearchTree(TreeNode root) {
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
lst = [4, 2, 5, 1, 3, None, 7, None, None, None, None, 6, 8]

sample_tree = deserialize(lst)

def valid_binary_search_tree(root):
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
  public static int[] arr = {4, 2, 5, 1, 3, -1, 7, -1, -1, -1, -1, 6, 8};

  public static TreeNode sampleTree = Deserialize(arr);

  public static void Main (string[] args) {
    Console.WriteLine("RESULT: " + ValidBinarySearchTree(sampleTree));
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


  public static int ValidBinarySearchTree(TreeNode root) {
    // TODO
    return -1;
  }
}
```

# Code
## Javascript Solution
```javascript
function isBST(root) {
	let result = [];

	function dfsInOrder(node) {
		if (node === null) return;
		dfsInOrder(node.left);
		result.push(node.val);
		dfsInOrder(node.right);
	}

	dfsInOrder(root);

	for (let i = 1; i < result.length; i++) {
		if (result[i] < result[i - 1]) {
			return false;
		}
	}
	return true;
}
```
## Python Solution
```python
    # Time O(N) Space O(H)
    def isBST(root: TreeNode) -> bool:
        
        def traverse(node, lo, hi):
            
            if not node: return True
            
            if node.val >= hi: return False
            if node.val <= lo: return False
            
            L = traverse(node.left, lo, node.val)
            R = traverse(node.right, node.val, hi)
            return L and R    
            
        return traverse(root, float('-inf'), float('inf'))
```

# Resources

https://leetcode.com/problems/validate-binary-search-tree/
