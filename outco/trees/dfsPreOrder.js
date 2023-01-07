/**
 * Using recursion or iteration with a while loop
 * write a function that takes the root of a binary tree node
 * and outputs an array of values ordered by depth-first (pre-order)
 * Pre DFS: Action, Left, Right
 * 
 * 
 * Pre DFS de-serializes a tree into an array according to some rules about
 * how tree nodes should be appended to the array
 * 
 * input: Node (a tree node) for the root of a binary tree;
 * Outuput: array
 * 
 *  */ 

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

let array = deserialize([1,1,2,3,5,8,13,21]);

const preDFS = (treeNode) => {
    let result = []
    const traverse = (current) => {
        // base case
        if (current === null){
            return;
        }

        // action
        result.push(current.value)

        // left traversal
        traverse(current.left)
        
        // right traversal
        traverse(current.right)
    }
    traverse(treeNode);
    return result;
}

console.log(preDFS(array))