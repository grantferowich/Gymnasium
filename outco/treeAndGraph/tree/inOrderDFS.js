// Linearization
// dfs has a tree root as an input parameter
// dfs returns an array
class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

const deserialize = (array) => {
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
const tree = deserialize(arr);

const inOrderDFS = (treeNode) => {
    let result = [];
    const traverse = (current) => {
        // base case
        if (current === null){
            return;
        }

        // left traversal
        traverse(current.left);

        // action
        result.push(current.value);
        
        // right traversal
        traverse(current.right);
    }
    traverse(treeNode);
    return result;
}

console.log(inOrderDFS(tree));