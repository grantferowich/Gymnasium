/* 215 - Valid Binary Search Tree
Given a binary tree root node, check if the tree is a valid binary search tree.

Input: Node in a Binary Tree
Output: Boolean
Example
Input: ValidBinarySearchTree

Output: False

Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
Binary Tree Node has the following properties:

value (Integer)
right (Binary Tree Node, default null)
left (Binary Tree Node, default null) */

class TreeNode{
    constructor(valueInt){
        this.valueInt = valueInt === undefined ? null : valueInt;
        this.leftInt = null;
        this.rightInt = null;
    }
}

const validBinarySearchTree = (rootNodeInt) => {

}

/* Tests */



/* Test results */