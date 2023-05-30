/* 

213 - Longest Path of a Binary Tree
Given a binary tree node, return the number of nodes 
in the longest path between the root and a leaf node.

Attempted May 30, 2023.
Successfully tested the solution May 30, 2023.

Finding the maximum depth of a binary tree is the same thing
as finding the height of a binary tree's root node.

Input: Node in a Binary Tree
Output: Integer
Example
Input: <BSTNode 1> =>   Output: 3 (from path 1--> 3--> 4)
LongestPathBinaryTree

Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
Binary Tree Node has the following properties:

value (Integer)
left (Binary Tree Node, default null)
right (Binary Tree Node, default null)


*/

class TreeNode{
    constructor(valueInt){
        this.valueInt = valueInt === undefined ? null : valueInt;
        this.rightInt = null;
        this.leftInt = null
    }
}

const heightOfRootNode = (node) => {
    if (node === null){
        return 0;
    }
    let leftInt = heightOfRootNode(node.leftInt);
    let rightInt = heightOfRootNode(node.rightInt);
    return Math.max(leftInt, rightInt) + 1;
}

/* Tests */

const tree1 = new TreeNode(8)
tree1.leftInt = new TreeNode(5)
tree1.rightInt = new TreeNode(13)
tree1.rightInt.rightInt = new TreeNode(21)

const heightInt1 = heightOfRootNode(tree1) 
console.log('Result 1: ', heightInt1)  // expect 3

/* Test results 

Result 1:  3

*/