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

// helper method
// input: an array of pairs
// output: a graph
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
];

// console.log(x)
// console.log(x.contains(3)) // true

const shortestRouteBFS2 = (edges, start, destination) => {

    const graph = generateAdjacencyList(edges)
    let distance = 0;
    const visited = []
    visited.push([start, distance])

    
    while (visited.length > 0){
        let node = visited.shift()
        if (node[0] === destination){
            return node.value[1]
        }
        let key = node[0]
        let neighbors = graph[key];        
        let x = 0;
        while (x < neighbors.length){
            let neighbor = neighbors[x]
            if (!visited.includes(neighbor)){
                visited.push([neighbor, distance+1])
            }
            x++
        }
    }
    return -1
}




console.log(shortestRouteBFS2(edges, 'i', 'l')) // 2