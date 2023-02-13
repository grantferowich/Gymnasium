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
  
    hasVertex(id) {
      if (this.storage.has(id)){
        return true;
      }
      return false;
    }
  
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

function courseSchedule(courseList) {
    let s = new Stack();
    courseList = generateAdjacencyList(courseList)
    let visited = new Set();
    let schedule = []
    let courses = courseList.vertices()
    let a = courses[0]
    s.push(a)
    visited.add(a)
  
    while (s.length > 0){
      let current = s.pop();
      let nextCourses = courseList.neighbors(current);
      schedule.push(current)
      if (nextCourses !== undefined){
        for (let x = 0; x < nextCourses.length; x++){
          if (!visited.has(nextCourses[x])){
            s.push(nextCourses[x])
            visited.add(nextCourses[x])
          }
        }
      }
    }
  
  
    return schedule.length > 0 ? schedule : []
  }

  let input1 = [['a','b'],['a','c'],['b','d'],['c','d']]
  console.log(courseSchedule(input1))