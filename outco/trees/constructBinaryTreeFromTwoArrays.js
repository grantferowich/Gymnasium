// inputs: one array of the preorder traversal 
// one array of the inorder traversal
// output: binary tree

// we know preorder traversal goes, current, left, right 
// we know inorder traversal goes, left, current, right

// working solution with some bugs 1/13/23

class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.right = null;
        this.left = null;
    }
}

const generateTree = (preArr, inArr) => {
    if (!preArr.length === 0){return null};

    if (preArr.length === 1){
        return new TreeNode(preArr[0]);
    }
    let root = new TreeNode(preArr[0]);
    const append = (node, depth) => {
        if (depth > preArr.length){
            return 
        }
        node.left = new TreeNode(preArr[depth+1])
        node.right = new TreeNode(preArr[depth+2])
        append(node.left, depth + 1);
        append(node.right, depth + 1)
    }
    append(root,0)
    return root;
}

console.log(generateTree([1,2,3,5,8], [2,1,5,3,8]))