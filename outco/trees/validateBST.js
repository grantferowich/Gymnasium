/**
 * 
 * 98. Validate Binary Search Tree
Medium
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

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
 * 
 *  */  // given a node in a binary search tree
// return true if the tree is a binary search treee

// a binary search tree is a tree in
// which all the child nodes in the left subtree have smaller values than the parent nodes
// and one in which child nodes in the right subtree are greater than their parent nodes

// recurse from the base case at depth 0 until the end of the tree

// check left and right 

// if all child nodes to the right are greater than their parent node 
// and
// if all child nodes to the left are less than their parent node
// then the tree is a valid binary search tree

// a binary tree is a tree where every node has 2 children

// * Definition for a binary tree node.
class TreeNode{
    constructor(value, left, right){
        this.value = (value===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}



// basically push tree values into an array via a pre-order depth first traversal.
// Loop over the array to ensure array[x] < array[x+1]
// if not return false 

// Time complexity: O(N)
// Space complexity: O(N) since the array will increase linearly as the input size increases
const validateBST = (treeRoot) => {
    const array = [];

    const inOrderTraversal = (node) => {
        //base case
        if (node === null){ return }
        // recursive case
        inOrderTraversal(node.left);
        array.push(node.value);
        inOrderTraversal(node.right);
    }
    inOrderTraversal(treeRoot);
    let x = 0;
    while (x < array.length){
        if (array[x] > array[x+1]){
            return false;
        }
        x++
    }
    return true;
}

