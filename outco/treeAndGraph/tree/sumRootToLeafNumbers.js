/* 
Sum Root to Leaf Numbers

Medium

You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.

    1
   / \
  2   3
  
12 + 13 = 25

## Approach 
1. Depth first search. We want to track every path from root to leaf.
    If there are 4 leaves, there will be four numbers to sum together.
2. Push each node value into a path array.
3. Join the path elements together to form a number (12, 13, etc.)
4. How do we know where to start? The root.
5. How do we know where to end? The current value is null. 
6. What does the recursive case look like?  
    Push the present node value into path array, 
    call dfs on the node's left and right child nodes
*/

const sumRootToLeafNumbers = () => {

    

}

