 /*
  *  Cryptic Dictionary
  *  Engineered in a code-along on July 8, 2023.
  *  Successfully tested the function on July 8, 2023.
  *  An array of strings in lexicographical (alphabetical) order has been put
  *  through a [simple substitution cypher](https://en.wikipedia.org/wiki/Substitution_cipher)
  *  where each letter is now substituted for another letter. Determine a valid
  *  ordering of characters in the cypher.
  *
  *  Parameters:
  *
  *  Input: words: [String]
  *  Output: [String]
  *
  *  Example:
  *
  *  Input: {"baa", "abcd", "abca", "cab", "cad"}
  *  Output: {"b", "d", "a", "c"}
  *
  *  Input: {"caa", "aaa", "aab"}
  *  Output: {"c", "a", "b"}
  *
  *  Source: https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/
  * 
  * The basic idea here is to return a
  * list of characters which basically says how this 
  * alien dictionary is assigning aliases to each character.
  * So, the returned list is the lexigraphically sorted
  * list of characters, as given by the input.
  * 
  * Sorted lexigraphically means the word at the position 0 in the array
  * is also the word which is closest to the start of the cryptic / alien
  * dictionary. 
  *  Here: 
  *  Input: {"caa", "aaa", "aab"}
  *  Output: {"c", "a", "b"}
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

const topologicalSort = (graph = []) => {
    if (graph === []){
        return []
    }
    let visitedSet = new Set();
    let outputArr = [];
  
    const dfs = (vertex) => {
        if (visitedSet.has(vertex)){
            return
        }
        visitedSet.add(vertex)
        let neighborsArr = graph.neighbors(vertex)
        if (neighborsArr !== null && neighborsArr !== undefined){
            neighborsArr = Array.from(neighborsArr)
        }
        let yInt = 0;
        while (yInt < neighborsArr.length){
            dfs(neighborsArr[yInt])
            yInt++
        }
        outputArr.push(vertex)
    }
  
    let verticesArr = graph.vertices()
    let xInt = 0;
    while (xInt < verticesArr.length){
        let vertex = verticesArr[xInt]
        dfs(vertex)
        xInt++
    }
    return outputArr.reverse()
  } 

 const findUniqueLetters = (word1Str, word2Str) => {
    let xInt = 0;
    let shortestWordLengthInt = Math.min(word1Str.length, word2Str.length);
    while (xInt < shortestWordLengthInt){
        if (word1Str[xInt] !== word2Str[xInt]){
            // the char at word1[x] lexigraphically
            // precedes the char at word2[x] since the list
            // of words is already sorted lexigraphically,
            return [word1Str[xInt], word2Str[xInt]]
        }
        xInt++
    }
 }

 const crypticDictionary = (arr) => {

    let outputArr = [];
    let xInt = 0;
    while (xInt < arr.length - 1){
        let word1Str = arr[xInt];
        let word2Str = arr[xInt + 1];
        outputArr.push(findUniqueLetters(word1Str, word2Str))
        xInt++
    }

    console.log('outputArr', outputArr);
    let graph = generateAdjacencyList(outputArr);
    console.log('graph', graph)
    return topologicalSort(graph)

 }

 
 /* Test */
const inputArr1 = ["baa", "abcd", "abca", "cab", "cad"];
// Output: {"b", "d", "a", "c"}

const inputArr2= ["caa", "aaa", "aab"];
//    Output: {"c", "a", "b"}

const output1Str = crypticDictionary(inputArr1);
const output2Str = crypticDictionary(inputArr2);

console.log('Result 1:', output1Str);
console.log('Result 2:', output2Str);

/* Test results 



*/
