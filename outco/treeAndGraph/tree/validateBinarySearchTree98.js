/**
 * 98. Validate Binary Search Tree
 * 
 * 
 * Successfully tested the function on July 8, 2023. 
 * 
 * 
 * 
Medium
15.1K
1.2K
Companies
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes 
with keys less than the node's key.
The right subtree of a node contains only nodes 
with keys greater than the node's key.
Both the left and right subtrees must also be 
binary search trees.
 

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 * 
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * input: node
 * output: true or false
 */
/**
//  * @param {TreeNode} root
//  * @return {boolean}
 */
var isValidBST = function(root) {

    const array = [];

    const inOrderTraversal = (node) => {
        if (node === null){ return }
        {inOrderTraversal(node.left)}
        array.push(node.val);
        {inOrderTraversal(node.right)}
    }
    inOrderTraversal(root);

    let x = 0
    while (x < array.length){
        if (array[x] >= array[x+1]){
            return false
        }
        x++
    }
    return true; 
};