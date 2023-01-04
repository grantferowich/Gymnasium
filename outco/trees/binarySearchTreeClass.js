class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

// instructions: insert 5
//              insert 3
//              
//              1 - root
//             / \ 
//               5
//

class BinarySearchTree{
    constructor(){
        this.root = null;
        this.size = 0;
    }

    // input: value
    // output: no return value
    insert(value){
        let xNode = new TreeNode(value)
        if (this.root === null){
            this.root = xNode;
            this.size++;
            return;
        }

        let parent = null;
        let child = this.root;
        // traverse subtree
        while (child){
            parent = child;
            child = parent.value > value ? parent.left : parent.right;
        }
        // insert leaf
        if (value < parent.value){
            parent.left = xNode;
        } 
        if (value > parent.value){
            parent.right = xNode;
        }
        this.size++;
    }
}