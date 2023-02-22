/**
 * Successfully tested the function 1/4/23.
 * 98. VALIDATE BINARY SEARCH TREE 
 * Medium
 * CTCI 4.5
 * 
 * Time complexity: O(N)
 * Space complexity: O(N)
 * 
 * 
 * Given the root of a binary tree, determine if it is a 
 * valid binary search tree (BST).
 * A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 * 
 * Example 1:
 * Input: root = [2,1,3]
 * Output: true
 * 
 * Example 2:
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
 * 
 * */ 

class TreeNode{
    constructor(value, left, right){
        this.value = (value===undefined ? 0 : value);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

// basically push tree values into an array via a pre-order depth first traversal.
// Loop over the array to ensure array[x] < array[x+1]
// if not return false 
// Time complexity: O(N)
// Space complexity: O(N) since the array will increase linearly as the input size increases

const validateBST = (treeRoot) => {
    const array = [];
    // in order traversal is left-current-right
    const inOrderTraversal = (node) => {
        //base case
        if (node === null){ return }
        // recursive case
        inOrderTraversal(node.left);
        // push tree node values to array 
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

let treeNode = new TreeNode(2);
treeNode.left = new TreeNode(1);
treeNode.right = new TreeNode(3)
console.log(validateBST(treeNode)); // true

// [5,1,4,null,null,3,6]
let treeNode2 = new TreeNode(5); 
treeNode2.left = new TreeNode(1);
treeNode2.right = new TreeNode(4);
treeNode2.left.left = null;
treeNode2.left.right = null;
treeNode2.right.left = new TreeNode(3);
treeNode2.right.right = new TreeNode(6);
console.log(validateBST(treeNode2)) // false