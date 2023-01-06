
class Graph {
    constructor() {
     this.storage = {};
    }
   
    // Time Complexity:
    // Auxiliary Space Complexity:
   
    // add vertex is basically add a key to a hash map
    addVertex(id) {
     // vertex already exists
     this.storage[id] = []
    }
   
    // Time Complexity:
    // Auxiliary Space Complexity:
    // remove vertex is basically remove a key from a hash map
    removeVertex(id) {
      this.storage[id].remove()
    }
   
    // Time Complexity:
    // Auxiliary Space Complexity:
    // add edge is basically add a value to the hash map
    addEdge(id1, id2) {
        let vertexList = [];
        for (let vertex in this.storage){
          vertexList.push(vertex);
        } 
        let index1 = vertexList.indexOf(id1.toString()); // 5
        let index2 = vertexList.indexOf(id2.toString()); 
        if (index1 === -1 || index2 === -1){
          return false;
        }
        this.storage[id1].push(id2)
        return true;
     }
   
    // Time Complexity:
    // Auxiliary Space Complexity:
    // remove edge is basically delete values from the hash map
    removeEdge(id1, id2) {
      // YOUR WORK HERE
    }
   
    // Time Complexity:
    // Auxiliary Space Complexity:
    // access to return boolean if key exists
    isVertex(id) {
      // YOUR WORK HERE
    }
   
    // Time Complexity:
    // Auxiliary Space Complexity:
    // access to return the values given a key
    neighbors(id) {
      // YOUR WORK HERE
    }
   }
   
let graph1 = new Graph()
graph1.addVertex(1);
graph1.addVertex(5);
graph1.addEdge(1,5)
console.log(graph1.storage)