const shortestRouteBFS2 = (edges, start, destination) => {
    // Create an adjacency list from the edges
    const graph = generateAdjacencyList(edges);
    // If either start or destination node does not exist in the graph, return -1
    if (!graph[start] || !graph[destination]){return -1}
    // Initialize the distance
    let distance = 0;
    // Initialize the queue
    let queue = [];
    // Create a set to store visited nodes
    const visited = new Set();
    // Add the start node to the queue with distance 0
    queue.push([start, distance]);
    // Mark the start node as visited
    visited.add(start);
    
    // Loop until the queue is empty
    while (queue.length > 0){
        // Get the next node from the queue
        let node = queue.shift();
        // Update the distance
        distance = node[1];
        // If the node is the destination node, return the distance
        if (node[0] === destination){
            return distance;
        }
        // Get the key of the current node
        let key = node[0];
        // Get the neighbors of the current node
        let neighbors = graph[key];
        // Initialize a counter for the neighbors
        let x = 0;
        // If there are no neighbors or the current node has no neighbors, continue with the next node
        if (!neighbors || neighbors.length === 0){ continue;}
        // Loop through all the neighbors of the current node
        while (x < neighbors.length){
            let neighbor = neighbors[x];
            // If the neighbor has not been visited, add it to the queue with distance + 1
            if (!visited.has(neighbor)){
                queue.push([neighbor, distance + 1]);
                visited.add(neighbor);
            }
            // Increase the counter for the neighbors
            x++;
        }
    }
    // If the destination node is not found, return -1
    return -1;
}
