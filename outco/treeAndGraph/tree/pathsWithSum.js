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
    let count = 0;

    const dfs = (node, tempSum) => {
        // destination
        if (tempSum === x){
            count++
            return
        }
        // base case 
        if (node === null){
            return
        }
        // early terminate
        if (tempSum > x){
            return 
        }
        // recursive calls 
        dfs(node.left, tempSum)
        tempSum += node.value
        dfs(node.right, tempSum) 
    }

    dfs(root, root.value)
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