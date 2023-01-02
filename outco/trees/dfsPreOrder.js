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
 * input: Node (a tree node)
 * Outuput: array
 * 
 *  */ 

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
    return result;
}