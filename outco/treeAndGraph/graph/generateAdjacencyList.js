/*   
Generate directed, unweighted adjacency list
Successfully tested the function 2/2/23.
This function generates a directed, unweighted adjacency list.
*/

class Graph {
    constructor() {
     this.storage = new Map()
    }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(1)
    // add vertex is basically add a key to a hash map
    addVertex(id) {
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
        if (!this.storage.has(id)){
            return null;
        }
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

const generateAdjacencyList = ( edges ) => {
    let g = new Graph()
    
    let x = 0;
    while (x < edges.length){
        let v = edges[x][0]
        let e = edges[x][1]
        if (!g.storage.has(v)){
            g.addVertex(v)
        }
        if (!g.storage.has(e)){
            g.addVertex(e)
        }  
        g.addEdge( v, e );
        x++
    }
    return g;
}

const edges = [[1,2], [1,3], [2,3]]
// const graph = generateAdjacencyListDirectedUnweighted(edges)
const g = generateAdjacencyList(edges) // { '1': [ 2, 3 ], '2': [ 3 ] }
console.log(g)
console.log(typeof g)