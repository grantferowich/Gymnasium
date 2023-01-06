/**
 * BFS Traversal
 * 
 * Using a queue and while loop write a function that 
 * takes the root of a binary tree node and outputs
 * an array of values ordered by breadth-first. 
 * 
 * 
 * Input: node
 * output: array
 * 
 *              8
 *            /    \
 *          5      13
 *        /  \     / \
 *      1    3   21   34
 * 
 * bfs: [8, 5, 13, 1, 3, 21, 34]
 * 
 * Steps
 * set current to queue.dequeue
 * push current children to queue (enqueue node.left and node.right)
 * push current value to result array
 *  
 * 
 * 
 * BFS uses queue to temporarily store nodes. 
 * From queue, the function acts on the values. 
 * */  
class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

let tree = new TreeNode(8);
tree.left = new TreeNode(5);
tree.right = new TreeNode(13);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right.left = new TreeNode(21);
tree.right.right = new TreeNode(34);

const treeBFS = (root) => {
    const queue = [];
    const result = [];
    queue.push(root);

    if (root === null){
        return result;
    }

    while (queue.length > 0){

        let current = queue.shift()
        result.push(current.value)

        if (current.left !== null){
            queue.push(current.left)
        }
        
        if (current.right !== null){
            queue.push(current.right)
        }   
    }
    return result;
}

console.log(treeBFS(tree))