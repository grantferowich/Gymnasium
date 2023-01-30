/* 
320 - Shortest Route
Find the shortest route from one vertex to another in a given graph.
Unfinished as of 1/18/23.
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
        for (let vertex in this.vertices){
          vertexList.push(vertex);
        } 
        let index1 = vertexList.indexOf(id1.toString()); // 5
        let index2 = vertexList.indexOf(id2.toString()); 
        if (index1 === -1 || index2 === -1){ return false; }
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

    let f;
    let g;
    let x = 0;
    while (x < edges.length){
        let edge = edges[x];
        [ f , g ] = edge;
        graph.addEdge( f , g );
        x++
    }
    return graphX
}

// let input = { 
//     i: [ 'j', 'k' ], 
//     j: [ 'i' ], 
//     k: [ 'i', 'm', 'l' ], 
//     m: [ 'k' ], 
//     l: [ 'k' ], 
//     o: [ 'n' ], 
//     n: [ 'o' ] 
//   } 