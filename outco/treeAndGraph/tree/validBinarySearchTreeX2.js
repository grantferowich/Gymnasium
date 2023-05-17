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

    if (rootNodeInt.valueInt === null || rootNodeInt === null){
        return false;
    }

    const traverse = (nodeInt) => {

        if (nodeInt.leftInt === null && nodeInt.rightInt === null){
            return true
        }

        if (nodeInt.leftInt > nodeInt.valueInt || nodeInt.rightInt < nodeInt.valueInt){
            return false
        }

        let leftToF = traverse(nodeInt.leftInt);
        let rightToF = traverse(nodeInt.rightInt);
        let resultToF = leftToF && rightToF;
        return resultToF;
    }

    return traverse(rootNodeInt);
}

/* Tests */
let binaryTree1 = new TreeNode(5);
binaryTree1.rightInt = new TreeNode(8);
binaryTree1.leftInt = new TreeNode(3);

let binaryTree2 = new TreeNode(5);
binaryTree2.leftInt = new TreeNode(8);
binaryTree2.rightInt = new TreeNode(3);

const result1TrueOrFalse = validBinarySearchTree(binaryTree1);
const result2TrueOrFalse = validBinarySearchTree(binaryTree2);

console.log(`Result 1: ${result1TrueOrFalse}`);
console.log(`Result 2: ${result2TrueOrFalse}`);

/* Test results */