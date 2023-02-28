/* 
PATHS WITH SUM
CTCI 4.12


*/

class TreeNode{
    constructor(value=null){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const pathsWithSum = (root, x) => {
    
    if (!root){ 
        return 0
    }

    let count = 0;
    
    const countPaths = (node, tempSum) => {
        // base case
        if (!node){
            return
        }
        tempSum += node.value
        // destination
        if (tempSum === x){
            count++
            return
        }
        // recursive calls
        countPaths(node.left, tempSum)
        countPaths(node.right, tempSum) 
    }
    
    countPaths(root, 0)
    return count
}

/* TESTS */
let tree = new TreeNode(1)
tree.left = new TreeNode(1)
tree.left.right = new TreeNode(2)
tree.left.left = new TreeNode(0)
tree.right = new TreeNode(2)
tree.right.right = new TreeNode(1)
tree.right.left = new TreeNode(0)

const result1 = pathsWithSum(tree, 4)
console.log('result1', result1)