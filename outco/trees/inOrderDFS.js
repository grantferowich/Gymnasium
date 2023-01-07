// Linearization
// dfs has a tree root as an input parameter
// dfs returns an array

const inOrderDFS = (treeNode) => {
    let result = []
    const traverse = (current) => {
        // base case
        if (current === null){
            return;
        }

        // left traversal
        traverse(current.left)

        // action
        result.push(current.value)
        
        // right traversal
        traverse(current.right)
    }
    traverse(treeNode)
    return result;
}