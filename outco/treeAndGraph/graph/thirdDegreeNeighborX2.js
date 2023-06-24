/*
 *  Third Degree Neighbors
 *
 *  From the Outco pset on Graph traversal.
 * 
 *  Started engineering on June 24, 2023.
 * 
 *  Given an undirected graph represented by a list of edges and a start
 *  vertex, return an array of the 3rd degree neighbors.
 *
 *  Parameters:
 *
 *  Input: edges: [[Integer]]
 *  Input: start: Integer
 *  Output: [Integer]
 *
 *  Example:
 *
 *  The following example with start vertex `1`:
 *  Input: `{{1,2},{2,1},{1,3},{3,1},{2,4},{4,2},{3,4},{4,3},
 *           {4,8},{8,4},{4,5},{5,4},{5,6},{6,5},{5,7},{7,5},
 *           {6,7},{7,6},{8,7},{7,8},{8,9},{9,8}}`
 *  Input: 1
 *  Output: `[5,8]` or `[8,5]`     (order does not matter)
 *  Picture here: https://res.cloudinary.com/outco/image/upload/v1519850256/graph-traversal/Paper.Graph_Traversal.2.png
 *
 *
 *
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

function thirdDegreeNeighbors(edgeListArr, startInt) {
    let graph = generateAdjacencyList(edgeListArr);
    let queue = new Queue;
    queue.enqueue([startInt, 0]);
    let visitedHM = new Map();
    let thirdDegreeNeighborsArr = [];

    while (queue.length > 0){
        // base case: append nodeInt to thirdDegreeNeighborsArr when degree is 3
        // base case: if degree exceeds 3, then terminate the function calls
        let nodeTuple = queue.dequeue()
        let nodeInt = nodeTuple[0];
        let degreeInt = nodeTuple[1];
        let neighborsSet= graph.neighbors(nodeInt);
        let neighborsArr;
        if (neighborsSet !== undefined){
            neighborsArr = Array.from(neighborsSet)
        }
        console.log('neighborsArr', neighborsArr)
        let xInt = 0;
        while (xInt < neighborsArr.length && neighborsArr !== undefined){
            let neighborInt = neighborsArr[xInt]
            // recurse when the degree is less than 3
            // recurse when the node has not been visited
            if (!visitedHM.has(nodeInt) && degreeInt < 3){
                queue.enqueue(neighborInt)
            }
            if (degreeInt === 3){
                thirdDegreeNeighborsArr.push(neighborInt)
            }
            xInt++
        }
    }
    return thirdDegreeNeighborsArr
}

/* Tests */
let arrayOfEdges1 = [[1,2], [2,1], [1,3], [3,1], [2,4], [4,2], [3,4], [4,3],
                    [4,8], [8,4], [4,5], [5,4], [5,6], [6,5], [5,7], [7,5],
                    [6,7],[7,6], [8,7], [7,8], [8,9], [9,8]];

let startInt1 = 1;

let resultList1 = thirdDegreeNeighbors(arrayOfEdges1, startInt1);
/* Test results */