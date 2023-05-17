/**
 * 
 * 98. VALIDATE BINARY SEARCH TREE 
 * CTCI 4.5
 * 
 * Successfully tested the function 2/21/23.
 * 
 * Time complexity: O(N)
 * Space complexity: O(1)
 * 
 * The other function completes the check with O(N) space. 
 * Can we do better?
 * Yes! With an O(N) runtime function having O(log(N)) space complexity.
 * 
 * Medium
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

const validateBST = (root) => {
    if (root === null || root === undefined){return false}
    const traverse = (node, min, max) => {
        
        // reached destination
        if (node === null){
            return true;
        }

        // every value in right subtree must be greater than min
        if (min !== null && node.value < min){
            return false;
        }

        if (max !== null && node.value > max){
            return false;
        }

        // when traversing right, min is updated, max stays the same
        let right = traverse(node.right, node.value, max)
        // when traversing left, max is updated, min stays the same
        let left = traverse(node.left, min, node.value)
        return right && left
    }

    return traverse(root, null, null)

}

/* TESTS */

let root = undefined
let result = validateBST(root)
console.log(result) // false

let root1 = new TreeNode(8)
root1.left = new TreeNode(5)
root1.right = new TreeNode(13)
let result1 = validateBST(root1)
console.log(result1) // true

let root2 = new TreeNode(8)
root2.left = new TreeNode(5)
root2.right = new TreeNode(13)
root2.right.left = new TreeNode(4)
let result2 = validateBST(root2)
console.log(result2) // false // 4 is placed incorrectly