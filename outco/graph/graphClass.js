
class Graph {
  constructor() {
   this.storage = new Map()
  }
 
  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  // add vertex is basically add a key to a hash map
  addVertex(id) {
      console.log(this.storage)
      if (this.storage.has(id)) { return false; }
      this.storage.set(id, new Set())
      return true;
  }
 
  // Time Complexity: O(V+E)
  // Auxiliary Space Complexity: O(1)
  // remove vertex is basically remove a key from a hash map
  removeVertex(id) {
        // vertex already exists
   if (!this.storage.has(id)){ return false;}
   for (let vertex in this.storage){
      let edges = this.storage.get(vertex);
      let index = edges.indexOf(id);
      // if the vertex being passed is an edge
      if (index >= 0){
          edges.delete(value)
      }
   }
   this.storage.delete(id);
   return true;
  }
 
  // Time Complexity: O(E)
  // Auxiliary Space Complexity: O(1)
  // add edge is basically add a value to the hash map

  addEdge(id1, id2) {

      if (!this.storage.has(id1)){
          this.storage.addVertex(id1)
      }
      if (!this.storage.has(id2)){
          this.storage.addVertex(id2)
      }
      //this.storage.get(x) returns a set
      // this.add(x) generates a union between the set and the element
      this.storage.get(id1).add(id2)
      return true;
  }
  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  // remove edge is basically delete values from the hash map
  removeEdge(id1, id2) {
      if (this.storage.has(id1)){
          if (this.storage.get(id1).has(id2)){
              this.storage.get(id1).delete(id2)
          }
          // edges.splice(index,1)
          return true;
        }
        return false;
  }
 
  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  // access to return boolean if key exists
  hasVertex(id) {
    if (this.storage.has(id)){
      return true;
    }
    return false;
  }
 
  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(E)
  // access to return the values given a key
  neighbors(id) {
      console.log('hi')
      if (!this.storage.has(id)){return null;}
      return this.storage.get(id)
  }

  vertices(){
      return this.storage.keys()
  }

  printVertices(){
      let vertices = Array.from(this.storage.keys())
      for (let x = 0; x < vertices.length; x++){
          console.log(vertices[x])
      }
  }
}
   
let graph1 = new Graph()
// graph1.addVertex(1);
// graph1.addVertex(5);
// graph1.addEdge(1,5);
graph1.addVertex('w')
graph1.addVertex('f')
graph1.addEdge('w', 'f')
console.log(graph1.storage)
console.log(graph1.vertices()) // [ 'w', 'f' ]