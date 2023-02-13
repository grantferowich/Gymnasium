// Graph, Linked List, and Queue Classes
// Successfully tested all queue methods 2/1/23

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
        let vertexList = [];
        for (let key of this.storage){
          vertexList.push(key[0]);
        } 
        console.log('vertex list', vertexList)
        let index1 = vertexList.indexOf(id1); 
        let index2 = vertexList.indexOf(id2); 
        if (index1 === -1){
            this.storage.addVertex(id1)
        }
        if (index2 === -1){
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
        console.log('hi')
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

class Stack{
    constructor(){
        this.linkedList = new LinkedList()
        this.length = 0
    }
    push(value){
        this.length++
        this.linkedList.append(value)
    }
    pop(){
        if (this.length === 0){
            return
        }
        this.length--
        let node = this.linkedList.remove(this.length).value
        return node;
    }
}


const generateAdjacencyListUndirectedUnweighted = (edges) => {
    
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

const generateAdjacencyListDirectedUnweighted = (arrayOfTuples) => {
    const list = {};
    for (let x = 0; x < arrayOfTuples.length; x++){
        const id1 = arrayOfTuples[x][0];
        const id2 = arrayOfTuples[x][1];
        if (!list[id1]){
            list[id1] = [];
        }
        if (list[id1]){
            list[id1].push(id2);
        }
    }
    return list;
}



let g = new Graph();
g.addVertex('w')
g.addVertex('f')
g.addVertex('u')
// console.log(g)
// g.removeVertex('w')
// console.log(g)
console.log('add egde...')
g.addEdge('w', 'f')
console.log(g)
// let s = new Stack()
// s.push(1)
// s.push(1)
// s.push(2)
// s.push(3)
// // console.log(s)
// console.log(s.pop()) // 3
// console.log(s) 