/* // Successfully tested the function 1/29/23
Complexity Analysis
Time complexity: O(V)
Space analysis: O(V)

*/
class Node{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.children = null
    }
}

// BFS uses a queue
// this BFS implementation starts at a node and searches for another node 
// BFS describes the traversal style 
const breadthFirstSearch = (graph, startNode, targetNode) => {
    
    // instantiate the queue
    let queue = [startNode];
    let visited = new Set();
    
    // process the queue
    while (queue.length > 0){
        // examine the first node in the queue
        let currentNode = queue.shift();
        // found the target
        if (currentNode === targetNode){
            return true;
        }
        // keep track of visited nodes
        visited.add(currentNode);
        if (graph[currentNode]){
            for (let neighbor of graph[currentNode]){
                // if the neighbor has not been processed
                // push the neighbor vertex into the queue for processing
                if (!visited.has(neighbor)){
                    queue.push(neighbor)
                    visited.add(neighbor)
                }
            }
        }
    }
    return false;
}

let graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};
console.log(breadthFirstSearch(graph, 'A', 'C'));  // Output: true
console.log(breadthFirstSearch(graph, 'A', 'E'));  // Output: true
console.log(breadthFirstSearch(graph, 'X', 'G'));  // Output: false
console.log(breadthFirstSearch(graph, 'A', 'G'));  // Output: false


