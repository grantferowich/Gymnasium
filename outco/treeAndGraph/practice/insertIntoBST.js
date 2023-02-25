// Successfully tested the solution 1/5/23.
// time complexity: O(N) in the worst case
// space complexity: O(N)
class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

let bst = new TreeNode(13)
bst.left = new TreeNode(8)
// bst.right = new TreeNode(21)
// bst.left.left = new TreeNode(5)
// bst.right.left = new TreeNode(15)
// bst.right.right = new TreeNode(34)
let bst2 = new TreeNode()

//

const insert = (root, value) => {
    let xNode = new TreeNode(value);
    // special case
    // root is null
    if (root === null || root === undefined){
        root = xNode;
        return;
    }

    const traverse = (node, insertionNode) => {
        // destination case
        if (insertionNode.value < node.value && node.left === null){
            node.left = insertionNode;
            return;
        }
        // destination case
        if (insertionNode.value > node.value && node.right === null){
            node.right = insertionNode;
            return;
        }
        if (insertionNode.value > node.value){
            traverse(node.right, insertionNode);
        } else {
            traverse(node.left, insertionNode);
        }
    }
    traverse(root, xNode);
    return
}

// console.log(insert(bst, 21))
// console.log(bst)

console.log(insert(bst2, 3));
console.log(bst2)
