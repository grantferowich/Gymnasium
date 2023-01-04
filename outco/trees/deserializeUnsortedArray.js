// Convert Array Into Binary Tree
// note this function does NOT convert arrays into BSTs, only BTs

// Input: unsorted array
// output: a binary tree

// Note that the binary tree may be validated as a 
// BST with the validateBST.js function.


// Procedure
// Initialize binary tree with the 0th array element as the root
// Set up the binary tree with the root in the queue as the first element to be processed
// loop over the array
// push array elements into the queue as leaves

class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

const deserializeUnsortedArray = (array) => {
    if (array.length == 0){
        return null;
    }
    // instantiate tree from the 0th element
    // 0th array element becomes the root of the tree
    let root = new TreeNode(array[0]);
    let queue = [root];
    for (let x = 1; x < array.length; x += 2){
        let current = queue.shift()
        if (array[x] !== null){
            current.left = new TreeNode(array[x]);
            queue.push(current.left)
        }
        if (array[x + 1] !== null && array[x+1] !== undefined){
            current.right = new TreeNode(array[x+1]);
            queue.push(current.right)
        }
    }
    return root;
}

const arr = [1,1,2,3,5,8,13,21,34,55,89];
console.log(deserializeUnsortedArray(arr))