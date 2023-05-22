/* 

213 - Longest Path of a Binary Tree
Given a binary tree node, return the number of nodes 
in the longest path between the root and a leaf node.

Attempted May 13, 2023.
Successfully tested the solution May 13, 2023.

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
        this.leftInt = null;
        this.rightInt = null;
    }
}

const longestPathOfABinaryTree = (rootNodeInt) => {
    
    const traverse = (nodeInt) => {
        
        if (nodeInt === null){
            return 0
        }

        if (nodeInt.valueInt !== null){
            let leftInt = traverse(nodeInt.leftInt)
            let rightInt = traverse(nodeInt.rightInt)
            return Math.max(leftInt, rightInt) + 1 
        }

    }

    return traverse(rootNodeInt)

}

/* Tests */

let binaryTree1 = new TreeNode(3);
binaryTree1.leftInt = new TreeNode(1);
binaryTree1.rightInt = new TreeNode(5);

const resultInt1 = longestPathOfABinaryTree(binaryTree1)

console.log(`Result 1: ${resultInt1}`);

/* Test results 


*/