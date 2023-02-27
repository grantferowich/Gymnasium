/* 

TREE NODE
CTCI 4.11

*/

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
        this.values = [];
    }
    // Time complexity: O(N) where N is the number of nodes if the tree is assumed to be imbalanced
    // Space Complexity: O(1)
    // input: value
    // output: no return value
    insert(value){
        this.values.push(value)
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
            examinedNode = examinedNode.value > value ? examinedNode.left : examinedNode.right 
        }
        return false
    }

    remove(value){
        if (!this.search(value)){
            return 'value does not exist'
        }
        let x = 0
        while (x < this.values.length){
            if (this.values[x] === value){
                this.values.splice(x,1)
            }
            x++
        }

        let node = this.root;
        while (node){
            if (node.value === value){
                this.sizes--;
                node.value = null;
                return `Node value ${value} set to null.`
            }
            if (value < node.value){
                node = node.left
            }
            if (value > node.value){
                node = node.right
            }
        }
    }

    getRandomNode(){
        let random = Math.floor(Math.random() * this.size)
        return this.values[random]
    }
}

const testRandomness = (array) =>{
    let occurrences = {};
    let bst = new BinarySearchTree()
    let x = 0
    while ( x < array.length){
        bst.insert(array[x])
        x++
    }
    for (x = 0; x < 2000; x++){   
        let randomNodeValue = bst.getRandomNode()
        occurrences[randomNodeValue] = occurrences[randomNodeValue] + 1 || 1;
    }
    return occurrences
}

const array1 = [15,23,55]
console.log("frequency: ", testRandomness(array1));
// console.log("frequency: ", testRandomness(array2));

// let bst = new BinarySearchTree()
// bst.insert(8)
// bst.insert(1)
// bst.insert(23)
// console.log(bst.getRandomNode())

