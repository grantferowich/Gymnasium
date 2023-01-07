
class Graph {
    constructor() {
     this.storage = {};
    }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(1)
    // add vertex is basically add a key to a hash map
    addVertex(id) {
        if (this.storage[id]) { return false; }
        this.storage[id] = [];
        return true;
    }
   
    // Time Complexity: O(V+E)
    // Auxiliary Space Complexity: O(1)
    // remove vertex is basically remove a key from a hash map
    removeVertex(id) {
          // vertex already exists
     if (!this.storage[id]){ return false; }
     for (let vertex in this.storage){
        let edges = this.storage[vertex];
        let index = edges.indexOf(id);
        if (index >= 0){
            edges.splice(index, 1)
        }
     }
     delete this.storage[id];
     return true;
    }
   
    // Time Complexity: O(E)
    // Auxiliary Space Complexity: O(1)
    // add edge is basically add a value to the hash map
    addEdge(id1, id2) {
        let vertexList = [];
        for (let vertex in this.storage){
          vertexList.push(vertex);
        } 
        let index1 = vertexList.indexOf(id1.toString()); // 5
        let index2 = vertexList.indexOf(id2.toString()); 
        if (index1 === -1 || index2 === -1){ return false; }
        this.storage[id1].push(id2);
        return true;
     }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(1)
    // remove edge is basically delete values from the hash map
    removeEdge(id1, id2) {
        if (this.storage[id1]){
            let edges = this.storage[id1];
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
      if (this.storage[id]){
        return true;
      }
      return false;
    }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(E)
    // access to return the values given a key
    neighbors(id) {
        if (!this.storage[id]){return null;}
        return this.storage[id]
    }
   }
   
let graph1 = new Graph()
graph1.addVertex(1);
graph1.addVertex(5);
graph1.addEdge(1,5);
console.log(graph1.storage)