/* 
Successfully tested the function 1/30/23.
Complexity analysis: 
Time complexity: O(V + E).
Space complexity: O(N)

320 - Shortest Route
Find the shortest route from one vertex to another in a given graph.

https://github.com/OutcoSF/outco-class-163/tree/main/whiteboarding/w3_d1_graphs

Complexity analysis: 
Time complexity : O(V+E)
Auxiliary space complexity: O(V)

Input: a graph, a starting vertex, an ending vertex
Output: number

Test case 1: 

Graph: A - X
       B - K - L
       C - G 
Start: A
End: G

Output: 3


*/

class Graph {
    constructor() {
     this.vertices = {};
    }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(1)
    // add vertex is basically add a key to a hash map
    addVertex(id) {
        if (this.vertices[id]) { return false; }
        this.vertices[id] = [];
        return true;
    }
   
    // Time Complexity: O(V+E)
    // Auxiliary Space Complexity: O(1)
    // remove vertex is basically remove a key from a hash map
    removeVertex(id) {
          // vertex already exists
     if (!this.vertices[id]){ return false; }
     for (let vertex in this.vertices){
        let edges = this.vertices[vertex];
        let index = edges.indexOf(id);
        if (index >= 0){
            edges.splice(index, 1)
        }
     }
     delete this.vertices[id];
     return true;
    }
   
    // Time Complexity: O(E)
    // Auxiliary Space Complexity: O(1)
    // add edge is basically add a value to the hash map
    addEdge(id1, id2) {
        let vertexList = [];
        let index1;
        let index2;
        for (let vertex in this.vertices){
          vertexList.push(vertex);
        }
        if (id1){
            index1 = vertexList.indexOf(id1.toString());
        } else {
            return -1
        }
        if (id2){
            index2 = vertexList.indexOf(id2.toString()); 
        } else {
            return -2
        }
        
        if (parseInt(index1) === -1 || parseInt(index2) === -1){ return false; }
        this.vertices[id1].push(id2);
        return true;
     }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(1)
    // remove edge is basically delete values from the hash map
    removeEdge(id1, id2) {
        if (this.vertices[id1]){
            let edges = this.vertices[id1];
            let index = edges.indexOf(id2);
            edges.splice(index,1)
            return true;
          }
          return false;
    }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(1)
    // access to return boolean if key exists
    isVertex(id) {
      if (this.vertices[id]){
        return true;
      }
      return false;
    }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(E)
    // access to return the values given a key
    neighbors(id) {
        if (!this.vertices[id]){return null;}
        return this.vertices[id]
    }
}

const generateAdjacencyList = (edges) => {
    let graphX = new Graph();
    let x = 0;
    while (x < edges.length){
        let edge = edges[x];
        if (!graphX.vertices[edge[0]]){
            graphX.addVertex(edge[0])
        }
        if (!graphX.vertices[edge[1]]){
            graphX.addVertex(edge[1])
        }  
        graphX.addEdge(edge[0] ,edge[1]);
        graphX.addEdge(edge[1], edge[0])
        x++
    }
    return graphX.vertices
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const edges2 = [
  [1,2],
  [1,3],
  [3,4]
];

const edges3 = [
    [1,2],
    [1,3],
    [3,4],
    [6]
]
// const edgesX = generateAdjacencyList(edges)

// (edgesX, 'i', 'l')
// let input = { 
//     i: [ 'j', 'k' ], 
//     j: [ 'i' ], 
//     k: [ 'i', 'm', 'l' ], 
//     m: [ 'k' ], 
//     l: [ 'k' ], 
//     o: [ 'n' ], 
//     n: [ 'o' ] 
//   } 

// Can we assume the graph will be a valid graph? I.e. connected? 

const shortestRouteBFS = (edges, start, destination) => {
    const graph = generateAdjacencyList(edges)
    console.log(graph)
    let visited = {};
    let distance = {};

    // init visited hashtable with vertices as keys
    // and values set to false
    for ( let x = 0; x < graph.length; x++){
        let vertex = graph[0]
        if (!visited.has(vertex)){
            visited[vertex] = false;
        }
        if (!distance[vertex]){
            distance[vertex] = Infinity
        }
    }
    distance[start] = 0;
    let queue = [start];

    while (queue.length > 0){
        // dequeue a vertex and set visited value to true
        let vertex = queue.shift()
        visited[vertex] = true;
      
        let neighbors = graph[vertex]
    
        for (let x = 0; x < neighbors.length; x++){
            let neighbor = neighbors[x];
            if (!visited[neighbor]){

                distance[neighbor] = distance[vertex] + 1
                queue.push(neighbor)
            }
        }
    }
    console.log(distance)
    return distance[destination] ? distance[destination] : -1
}

console.log(shortestRoute(edges, 'i', 'l')) // 2 [i to k, k to l]
console.log(shortestRoute(edges2, 1, 2)) // 1
console.log(shortestRoute(edges3, 1, 6)) // -1