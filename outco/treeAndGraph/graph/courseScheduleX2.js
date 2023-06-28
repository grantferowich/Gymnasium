/* *  Course Schedule
*
*  A collection of courses at a University has prerequisite courses that must
*  be taken first.  Given an array of course pairs [A, B] where A is the
*  prerequisite of B, determine a valid sequence of courses a student can
*  take to complete all the courses.
*
*  Topological sort
*  I will implement the topological sort with a post-order
*  depth-first search traversal to generate an array. Then, to complete
*  the topological sort I will reverse the array.
*  Parameters:
*
*  Input: courses: [[String]]
*  Output: [String]
*
*  Example:
*
*  Input: {{"a","b"},{"a","c"},{"b","d"},{"c","d"}}
*  Output: {"a","b","c","d"} or {"a","c","b","d"}
*
*  Input: {{"a","b"},{"b","c"},{"c","d"}}
*  Output: {"a","b","c","d"}
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

/* 
*  Input: edgeListArr
*  Output: arr
*  Topological sort
*  I will implement the topological sort with a post-order
*  depth-first search traversal to generate an array. Then, to complete
*  the topological sort I will reverse the array.
*/

const courseSchedule = (edgeListArr) => {



}

/* Tests 
*  Input: {{"a","b"},{"a","c"},{"b","d"},{"c","d"}}
*  Output: {"a","b","c","d"} or {"a","c","b","d"}
*
*  Input: {{"a","b"},{"b","c"},{"c","d"}}
*  Output: {"a","b","c","d"}
*/

const edgeListArr1 = [["a", "b"], ["a", "c"], ["b", "d"], ["c", "d"]];
const testArr1 = courseSchedule(edgeListArr1);
console.log('Result 1: ', testArr1); // a, b, c , d

const edgeListArr2 = [["a", "b"], ["b","c"], ["c", "d"]];
const testArr2 = courseSchedule(edgeListArr2);
console.log('Result 2: ', testArr2) // a, b, c, d

/* Test results */