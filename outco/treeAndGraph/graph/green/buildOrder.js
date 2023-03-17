/* 

BUILD ORDER
CTCI 4.7

For each [v, u] pair in the list of tuples,
u is a dependency of v. Therefore, v must 
be compiled before u may be compiled. 

input: projects (array), and dependencies (array of tuples)
output: array sorted topologically

input: [[a,d], [f,b], [b,d], [f,a], [d,c]]
output: f,e,a,b,d,c

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

const buildOrder = (projects, dependencies) => {
    let order = []
    // first check if there are any projects with 0 dependencies
    let x = 0
    while (x < projects.length){
        if (!dependencies.hasVertex(projects[x])){
            order.push(projects[x])
        }
        x++
    }

    if (dependencies === null || projects === null || dependencies === undefined || projects === undefined || dependencies.length === 0 || projects.length === 0){
        return 'invalid input'
    }

    let sorted = topologicalSort(dependencies);
    return [...order,...sorted]
}

/* TESTS */
let dependencies0 = []
let projects0 = []
let graph0 = generateAdjacencyList(dependencies0)
let result0 = buildOrder(projects0,graph0)
console.log(result0) // invalid input



let dependencies1 = [['a','d'], ['f','b'], ['b','d'], ['f','a'], ['d','c']]
let projects1 = ['a','b','c','d','e','f']
let graph1 = generateAdjacencyList(dependencies1)
let result1 = buildOrder(projects1,graph1)
console.log(result1) // [ 'f', 'e', 'a', 'b', 'd', 'c'] or [ 'e', 'f', 'a', 'b', 'd', 'c']