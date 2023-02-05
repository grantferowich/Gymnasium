/* 226. Invert Binary Tree
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
Output: [] */


const invertTree = (node) => {
    let root = node;
    const invert = (TreeNode, depth) => {
        if (TreeNode == null){
          return
        }
        let tempX = TreeNode.left;
        let tempY = TreeNode.right;
        TreeNode.right = tempX;
        TreeNode.left = tempY;
        invert(TreeNode.left, depth + 1)
        invert(TreeNode.right, depth + 1)
    }
    invert(root);
    return root
}

// Successfully tested the invertTree function 12/8/22
console.log(invertTree([4,2,7,1,3,6,9]))  // Expected output: [4,7,2,9,6,3,1]
console.log(invertTree([]))

  
  
  
  
  
  