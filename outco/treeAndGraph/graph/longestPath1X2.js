/*
 *  Longest Path I

 *  Started engingeering on June 27, 2023.
 *  Successfully tested the function on June 27, 2023.
 * 
 *  Given a DAG (directed acyclic graph), find the longest path in the graph.
 *
 *  Parameters:
 *
 *  Input: Graph: [[Integer]] (edge list)
 *  Output: Integer
 *
 *  Example:
 *
 *  Input: {{1,2},{2,3},{1,3}}
 *  Output: 3 --> {1,2,3}
 *
 *  Input: {{6,5},{6,4},{5,4},{4,3},{2,3},{1,2},{4,1}}
 *  Output: 6 --> {6,5,4,1,2,3}
 *
 *  Resources:
 *  - https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/
 *  Approach: 
 * 
 *  Use a queue and depth first-search. 
 *  Initialize the queue. Grab the 0th element of the 0th tuple in the list of edges. 
 *  Enqueue that root to the queue. 
 *  Keep track of the longestPathArr. Initialize the longestPathArr as []. 
 *  Initialize a set. The set will keep track of whether a given nodeInt has been visited.
 *  Get the list of neighbor nodes for the current node. 
 *  
 *  Termination / base case:
 *  If the node has been visited, then do not operate with it.
 *  
 *  Recursive case: 
 *  If the node has not been visited, then enqueue the node to the queue. 
 *  If the node has not been visited, then append the number to the longestPathArr. 
 *  Every time the function processes a node from the queue, dequeue. 
 *  
 *  When the queue is finally empty again, return the longestPathArr. 
 */

// Helper Data Structures and Algorithms
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
  
// Graph Class: Directed, Unweighted, Adacency List
class Graph {
    constructor() {
        this.storage = new Map();
    }
  
    addVertex(value) {
        if (this.storage.get(value) === undefined) {
            this.storage.set(value, new Set());
        }
    }
  
    removeVertex(value) {
      if (this.storage.get(value) === undefined) {
          return;
      }
      // remove all edge references to vertex
      for (let vertex in this.storage) {
          let neighbors = this.storage.get(vertex);
          neighbors.delete(value);
      }
      // remove vertex from storage
      this.storage.delete(value);
    }
  
    addEdge(a, b) {
      if (this.storage.get(a) === undefined) {
          this.addVertex(a);
      }
      if (this.storage.get(b) === undefined) {
          this.addVertex(b);
      }
      this.storage.get(a).add(b);
    }
  
    removeEdge(a, b) {
      if (this.storage.get(a) === undefined) {
         return;
      }
      this.storage.get(a).delete(b);
    }
  
    isVertex(vertex) {
        return this.storage.get(vertex) !== undefined;
    }
  
    neighbors(vertex) {
      if (this.storage.get(vertex) !== undefined) {
        return this.storage.get(vertex);
      }
    }
  
    vertices() {
      let keys = [];
      this.storage.forEach((value, key) => {
        keys.push(key);
      })
      return keys;
    }
  }
  
  // generate graph from list of edges
function generateAdjacencyList(edges) {
    let graph = new Graph();
  
    let u, v;
    edges.forEach(edge => {
      [u, v] = edge;
      graph.addEdge(u, v);
    });
  
    return graph;
  }

const longestPath1 = (listOfEdgesArr) => {
    let graph = generateAdjacencyList(listOfEdgesArr)
    if (listOfEdgesArr.length === 0){
        return;
    }

    let longestPathArr = [];
    let queue = new Queue();
    let visitedSet = new Set()
    let rootTuple = listOfEdgesArr[0];
    queue.enqueue(rootTuple[0]);
    longestPathArr.push(rootTuple[0]);
    visitedSet.add(rootTuple[0])
    
    while (queue.length > 0){
        let nodeInt = queue.dequeue()
        let neighborsArr = Array.from(graph.neighbors(nodeInt))
        if (longestPathArr.indexOf(nodeInt) === -1){
            longestPathArr.push(nodeInt)
        }
        let xInt = 0;
        while (neighborsArr !== undefined && xInt < neighborsArr.length){
            let neighborInt = neighborsArr[xInt];
            if (!visitedSet.has(neighborInt)){
                visitedSet.add(neighborInt);
                queue.enqueue(neighborInt)
            }
            xInt++
        }
    }
    return longestPathArr.length
}

/* Test 
 *  Input: {{1,2},{2,3},{1,3}}
 *  Output: 3 --> {1,2,3}
 *
 *  Input: {{6,5},{6,4},{5,4},{4,3},{2,3},{1,2},{4,1}}
 *  Output: 6 --> {6,5,4,1,2,3}
 */

let edgeList1Arr = [[1, 2], [2, 3], [1, 3]];
let edgeList2Arr = [[6, 5], [6, 4], [5, 4], [4, 3], [2, 3], [1, 2], [4, 1]]

const result1Int = longestPath1(edgeList1Arr);
const result2Int = longestPath1(edgeList2Arr);

console.log('Result 1: ', result1Int); // expect 3
console.log('Result 2: ', result2Int); // expect 6

/* Test results */