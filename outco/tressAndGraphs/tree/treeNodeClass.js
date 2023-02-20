class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

let node = new TreeNode(1)
node.left = new TreeNode(1)
node.right = new TreeNode(2)
console.log(node)