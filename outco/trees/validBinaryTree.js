// given a node in a binary search tree
// return true if the tree is a binary search treee

const { ROOT_CONFIG_FILENAMES } = require("@babel/core/lib/config/files")

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
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}


// const checkValidBST = (head) => {

//     const traverse = (node, depth) => {
//         console.log("treeNode value: ", TreeNode.value)
//         console.log("treeNode left: ", TreeNode.left)
//       if (TreeNode.right < TreeNode.val || TreeNode.left > TreeNode.val){
//         return false;
//       }
//       traverse(TreeNode.right, depth + 1);
//       traverse(TreeNode.left, depth + 1);
//     }
    
//     traverse(head);
//     return true;
// }

// Successfully tested 1 of 2 tests on 12/8/22.

// checkValidBST([2,1,3]) // Expected Output: true | Actual Output: true
// checkValidBST([5,1,4,null, null, 3,6]) // Expected Output: false | Actual output: true


// const validateBST = (head) => {
//     let result = [];

//     const check = (TreeNode) =>{
//         if (TreeNode === null) {return}
//         check(TreeNode.left);
//         result.push(TreeNode);
//         check(TreeNode.right);
//     }
//     check(head);

//     for (let x = 1;  x < result.length; x++){
//         if (result[x] < result[x - 1]){
//             return false;
//         }
//     }
//     return true;
// }
//This solution bugs out. ^ 

// console.log(validateBST([2,1,3]))
// console.log(validateBST([5,1,4, null, null, 3,6]))

const isValidBST = (node) => {
    const dfs = (root, min, max) =>{
        if (node == null){ return true};

        if ( max !== null && root.val >= max) { return false} 
            
       if ( min !== null && root.val <= min) { return false}
    }

    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
}

console.log(isValidBST([2,1,3]))
console.log(isValidBST([5,1,4, null, null, 3,6]))

// created logic for the function on 12/8/22.
// The solution was not tested as of 12/8/22.