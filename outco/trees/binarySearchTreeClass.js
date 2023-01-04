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


    // Time complexity: O(N) where N is the number of nodes if the tree is assumed to be imbalanced
    // Space Complexity: O(1)
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

    // Time Complexity:  O(N) in the worst case when the tree is imbalanced
    // Space Complexity: O(1)
    // input: value
    // output: boolean
    search(value){
        let examinedNode = this.root;
        while (examinedNode){
            if (examinedNode.value === value){
                return true
            }
            examinedNode = examinedNode.value > value ? parent.left : parent.right 
        }
        return false
    }
}