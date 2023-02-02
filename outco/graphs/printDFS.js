/* 
PRINT DFS
given a graph
return each value from the graph from a depth-first traversal
*/

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
        return this.storage[id];
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

class Stack {
    constructor(){
        this.list = new LinkedList();
        this.length = 0;
    }
    push(x){
        this.length++
        this.list.append(x)
    }
    pop(){
        if (this.length === 0){
            return 
        }
        let value = this.list.remove(this.length-1).value
        this.length--;
        if (value){
            return value
        } else {
            return null
        }
    }
    peek(){
        return this.list.head.value;
    }
}

// this adjcacency list generator creates 
// an undirected adjacecny list
const generateAdjacencyList = (edges) => {
    
    let graphX = new Graph();
    let x = 0;
    while (x < edges.length){
        let edge = edges[x];
        if (!graphX.storage[edge[0]]){
            graphX.addVertex(edge[0])
        }
        if (!graphX.storage[edge[1]]){
            graphX.addVertex(edge[1])
        }  
        graphX.addEdge(edge[0] ,edge[1]);
        x++
    }
    return graphX.storage
}

const printDFS = ( graph, start) => {
    let stack = new Stack();
    let visited = new Set();
    let current, neighbors;

    stack.push(start);
    visited.add(start);
    
    while (stack.length > 0){
        current = stack.pop();
        neighbors = graph[current];
        console.log(current);
        for (let x = 0; x < neighbors.length; x++){
            if (!visited.has(neighbors[x])){
                stack.push(neighbors[x]);
                visited.add(neighbors[x])
            }
        }
    }
}

const edgesX = [[ 1 , 2 ], [ 1, 3 ], [ 2, 4], [ 3, 4], [ 4, 8], [ 4, 5 ], [ 5, 6 ], [ 5, 7], [ 7 , 8 ], [ 8, 9 ] ];
const edgesY = [[1,2], [1,3], [2,3]]
const graphX = generateAdjacencyList(edgesX) 
const graphY = generateAdjacencyList(edgesY) 


// printDFS(graphX, 1) // 1 2 3 4 8 5 9 6 7

printDFS(graphY, 1) // 1 2 3 

