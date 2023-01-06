
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
      // YOUR WORK HERE
    }
   
    // Time Complexity:
    // Auxiliary Space Complexity:
    // add edge is basically add a value to the hash map
    addEdge(id1, id2) {
      // YOUR WORK HERE
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
console.log(graph1.storage)