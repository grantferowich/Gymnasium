/* 
100. Same Tree

Successfully tested the function on July 8, 2023.
https://leetcode.com/problems/same-tree/

Easy
Given the roots of two binary trees p and q,
 write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical,
and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false */


class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

let bst = new TreeNode(13)
bst.left = new TreeNode(8)
bst.right = new TreeNode(21)

let bst2 = new TreeNode(13)
bst2.left = new TreeNode(8)
bst2.right = new TreeNode(21)

let bst3 = new TreeNode(8)
bst3.left = new TreeNode(5)
bst3.right = new TreeNode(13)

const sameTree = (tree1, tree2) => {
    const traverse = (node1, node2) => {
        if (node1 === null && node2 === null){
            return true;
        }
        if (node1 === null || node2 === null){
            console.log()
            return false;
            
        }
        if (node1.value !== node2.value){
            return false;
        }
        return traverse(node1.left, node2.left) &&
        traverse(node1.right, node2.right)

    }
    return traverse(tree1, tree2)
}

/* Tests */
console.log(sameTree(bst, bst2)) // expected output: true
console.log(sameTree(bst3, bst2)) // expected output: false