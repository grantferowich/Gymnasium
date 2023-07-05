/*
  *  Friend Circles
  *
  *  Started engineering on June 24, 2023. 
  *  Successfully tested the function on June 24, 2023. 
  * 
  *  A friend circle is a group of people who are direct or indirect friends.
  *  Given a NxN bitset matrix, where a 1 in the i,j coordinate signifies a
  *  friendship between person i and person j, determine how many circles of
  *  friends there are.
  *
  *  Parameters:
  *
  *  Input: Graph: [[Integer]] (adjacency matrix)
  *  Output: Integer
  *
  *  Example:
  *
  *  Input: `{{1,1,0},
  *           {1,1,0},
  *           {0,0,1}}`
  *  Output: 2
  *
  *  Input: `{{1,1,0}, 
  *           {1,1,1}, 
  *           {0,1,1}}`
  *  Output: 1
  *
  *  Resources:
  *  - https://leetcode.com/problems/friend-circles/description/
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


function friendCircles(matrix) {
    let visitedHM = new Map();
    
    const dfs = (iInt, jInt) => {
        // base case: out of bounds
        // base case: visitedHM already has the iInt _ jInt coordinates as a key
        let keyStr = iInt + "_" + jInt;
        if (iInt < 0 || jInt < 0 || iInt >= matrix.length || jInt >= matrix[0].length || visitedHM.has(keyStr) || matrix[iInt][jInt] === 0){
            return;
        }
        visitedHM.set(keyStr, true)
        // recurisve case: move down or move right
        dfs(iInt + 1, jInt);
        dfs(iInt, jInt + 1);
        dfs(iInt - 1, jInt);
        dfs(iInt, jInt - 1);
    }

    let xInt = 0;
    let yInt = 0;   
    let circlesInt = 0;

    while (xInt < matrix.length){
        yInt = 0;
        while (yInt < matrix[0].length){
            let keyStr = xInt.toString() + "_" + yInt.toString();
            if (matrix[xInt][yInt] === 1 && !visitedHM.has(keyStr)){
                dfs(xInt, yInt);
                circlesInt++;
            }
            yInt++;
        }
        xInt++;
    }
    return circlesInt
}

/* Tests */
let matrix1 = [[1, 1, 0],
               [1, 1, 0],
               [0, 0, 1]];

let matrix2 = [[1, 1, 0],
               [1, 1, 0],
               [0, 0, 0]]

let resultInt1 = friendCircles(matrix1);
let resultInt2 = friendCircles(matrix2);

console.log('Result 1: ', resultInt1); // expect 2
console.log('Result 2: ', resultInt2); // expect 1

/* Test results

Result 1:  2
Result 2:  1

*/