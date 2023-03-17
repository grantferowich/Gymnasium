/* 
Successfully tested the function 2/13/23.
Input: a graph represented by an adjacency list 
Output: an integer
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
        if (!this.storage.has(id)){return null;}
        return Array.from(this.storage.get(id))
    }
  
    vertices(){
        return Array.from(this.storage.keys())
    }
  
    printVertices(){
        let vertices = Array.from(this.storage.keys())
        for (let x = 0; x < vertices.length; x++){
            console.log(vertices[x])
        }
    }
  }

class ListNode {
    constructor(value){
        this.value = value;
        this.nIntext = null;
    }
}

class LinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    append(value){
        this.insert(value, this.length)
    }

    prepend(value){
        this.insert(value, 0)
    }

    insert(value, index){
        if (index < 0 || index > this.length){
            return;
        }
        let xNode = new ListNode(value);
        if (this.length === 0){
            this.head = xNode;
            this.tail = xNode;
        } else if (index === 0){
            xNode.next = this.head;
            this.head = xNode;
        } else if (index === this.length){
            this.tail.next = xNode;
            this.tail = xNode;
        } else {
            let prev = this.head;
            for (let x = 0; x < index - 1; x++){
                prev = prev.next;
            }
            xNode.next = prev.next;
            prev.next = xNode;
        }
        this.length++
    }
   
    remove(index){
        if (index < 0 || index >= this.length) { return; }
        let result;
        if (this.length === 1){
            result = this.head;
            this.head = null;
            this.tail = null;
        } else if ( index === 0){
            result = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let x = 0; x < index - 1; x++){
                prev = prev.next;
            }
            result = prev.next;
            prev.next = prev.next.next;
            if (index === this.length - 1){
                this.tail = prev;
            }
        }
        this.length--;
        return result;
    }


    contains(value){
        let current = this.head;
        while (current){
            if (current.value === value){
                return true
            }
            current = current.next
        }
        return false;
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

function longestPath(graph) {
    let result = 0;
    let visited = new Set();
    graph = generateAdjacencyList(graph)
    const vertices = graph.vertices()

    const dfs = (v, depth) => {
      if (visited.has(v)){ return }
      const neighbors = graph.neighbors(v)
      result = Math.max(depth, result)
      visited.add(v)
      if (neighbors !== undefined && neighbors !== null){
        for (let x = 0; x < neighbors.length; x++){
            dfs(neighbors[x], depth+1)
          }
      }
      visited.delete(v)
    }

    for (let v = 0; v < vertices.length; v++){
        dfs(vertices[v], 1)
    } 
    return result
}

const input1 = [[1,2],[2,3],[1,3]]
const input2 = [[6,5],[6,4],[5,4],[4,3],[2,3],[1,2],[4,1]]
const graph1 = generateAdjacencyList(input1)
const graph2 = generateAdjacencyList(input2)
console.log(longestPath(input1)); // 3 
console.log(longestPath(input2)); // 6