// implemented and successfully tested the solution 1/5/23
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
bst.left.left = new TreeNode(5)
bst.right.left = new TreeNode(15)
bst.right.right = new TreeNode(34)


const searchBST = (root, value) => {
    const traverse = (node, value) => {
        if (node === null){
            return false;
        }
        if (node.value === value){
            return true;
        } 
        if (value < node.value){
            return traverse(node.left, value)
        }

        if (value > node.value){
            return traverse(node.right, value)
        }
    }
    return traverse(root, value);
}

// console.log(bst)
console.log(searchBST(bst, 5)) // expected output: true
console.log(searchBST(bst, 13)) // expected output: true
console.log(searchBST(bst, 93)) // expectedoutput: false