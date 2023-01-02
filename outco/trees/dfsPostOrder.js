
const inOrderDFS = (treeNode) => {
    let result = []
    const traverse = (current) => {
        // base case
        if (current === null){
            return;
        }

        // left traversal
        traverse(current.left)
        // right traversal
        traverse(current.right)
         // action
         result.push(current.value)
    }

}