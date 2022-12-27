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
 * Steps
 * set current to queue.dequeue
 * push current children to queue (enqueue node.left and node.right)
 * push current value to result array
 *  */  


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