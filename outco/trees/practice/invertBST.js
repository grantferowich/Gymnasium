/**
 * Successfully tested the solution 1/4/23.
 * 226. Invert Binary Tree
Easy
Given the root of a binary tree, invert the tree, and return its root.

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:

Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []
 * 
 * helper method recursion
 * if node has left leaf, set left leaf as right leaf
 * if node has right lead, set right leaf as left leaf
 *
 * 
 *  */ 

const invertBT = (root) => {

    const invertNodeLeaves = (node) => {
        if (!node){
            return 
        }
        let tempX = node.right;
        let tempY = node.left;
        node.right = tempY;
        node.left = tempX;
        invertNodeLeaves(node.left)
        invertNodeLeaves(node.right)
    }
    invertNodeLeaves(node)
    return root
}
