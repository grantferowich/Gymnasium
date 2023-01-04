class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
        this.size = 0;
    }

    insert(value){
        let xNode = new TreeNode(value)
        if (this.size === 0){
            this.root = xNode;
        }
        
    }
}