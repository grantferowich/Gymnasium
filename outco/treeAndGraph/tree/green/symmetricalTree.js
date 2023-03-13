/* 
101. Symmetrical Tree
Easy

Given the root of a binary tree, check whether it is a mirror of itself (i.e.
symmetrical around its center.)


*/

const symmetricalTree = (root) => {
    const traverse = (left, right) => {
        if (left === null && right === null){
            return true
        }
        if (left === null || right === null || left === undefined || right === undefined){
            return false;
        }
        if (left.val !== right.val){
            return false
        }
        return traverse(left.left, right.right) && traverse(left.right, right.left)
    }
    if (root === null){
        return true
    }
    return traverse(root.left, root.right)
};

