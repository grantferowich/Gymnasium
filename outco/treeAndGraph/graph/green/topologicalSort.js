/* 
Tested the topological sort function across two test cases on 2/21/23.
*/
// Given a graph, return the graph sorted by 
// topological ordering.
// To get the topological order, you may run a postorder traversal.
// Reverse the post-order traversal. 

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
  
    vertices() {
        return Array.from(this.storage.keys())
    }
  
    printVertices() {
        let vertices = Array.from(this.storage.keys())
        for (let x = 0; x < vertices.length; x++){
            console.log(vertices[x])
        }
    }
}

class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
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

class Queue {
    constructor(){
        // instantiate a queue as an instance of a linked list
        this.linkedlist = new LinkedList();
        this.length = 0;
    }

    enqueue(value){
        this.length++;
        //add element to end of linked list
        this.linkedlist.append(value);
    }

    dequeue(){
        if (this.length === 0){
            return
        }
        this.length--;
        // remove element from end of linked list
        let firstElement = this.linkedlist.remove(0).value;
        if (firstElement){
            return firstElement;
        } else {
            return null;
        }
        
    }

    peek(){
        return this.linkedlist.head.value;
    }
}

const generateAdjacencyList = ( edges ) => {
    if (edges.length === 0) {return  [] }
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

    return g
}



/* 
Topological Sort Psuedocode:
1. Instantiate a set and an array for tracking visited vertices and returning an output.
2. DFS post-order traversal.
3. Reverse the post-order traversal.  
*/
const topologicalSort = (graph) => {
    if (graph.length === 0){ return true}
    let visited = new Set();
    let output = [];
    let temporary = new Set()
    let valid = true
    

    const dfs = (current) => {
        if (temporary.has(current)){
            valid = false
        }
        if (visited.has(current)){
            return;
        }
        visited.add(current);
        temporary.add(current)
        let neighbors = graph.neighbors(current)
        let x = 0;
        while (neighbors && x < neighbors.length){
            dfs(neighbors[x])
            x++
        }
        temporary.delete(current)
        output.push(current);
    }
    let vertices = graph.vertices()
    
    let v = 0
    while (v < vertices.length){
        dfs(vertices[v])
        v++
    }
    return !valid ? false : output.reverse()
}
/* TESTS */
let i0 = []
let g0 = generateAdjacencyList(i0)
// console.log('//debug g0',g0)
console.log(topologicalSort(g0)) // true

let i1 = [[1,2], [1,3], [2,3]]
let g1 = generateAdjacencyList(i1)
console.log('//debug g1',g1)
console.log(topologicalSort(g1)) // [1,2,3]

let i2 = [[1,0], [0,1]]
let g2 = generateAdjacencyList(i2)
console.log(topologicalSort(g2)) // output false