/*  
//DETECT CYCLE 

/// Successfully tested the function 02/10/23.
 */
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

function detectCycleInGraph(edgeList) {
    if (edgeList.length < 3){
        return false;
    }
    
    let s = new Stack();
    let start = edgeList[0][0];
    let visited = {};

    s.push(start);
    visited[start] = 'pre';


    const getNeighbors = (element, edgeList) => {
      let neighbors = [];
      for (let x = 0; x < edgeList.length; x++){
        if (edgeList[x][0] === element){
          neighbors.push(edgeList[x][1])
        }
      }
      return neighbors
    }

    while (s.length > 0){
        let top = s.pop();
        if (visited[top] === 'pre'){
            // get neighbors 
            let neighbors = getNeighbors(top, edgeList)
            for (let x = 0; x < neighbors.length; x++){
                if (visited[neighbors[x]] === 'pre'){
                    return true
                }
                if (!visited[neighbors[x]]){
                    // add unvisited neighbors to stack
                    s.push(neighbors[x])
                    // set visisted status of neighbors to 'pre'
                    visited[neighbors[x]] = 'pre'
                }
            }
        }
        visited[top] = 'post'
    }
    return false;
}


let input1 = [[1, 2], [2, 1], [2, 3], [3, 2], [3, 1], [1, 3]]
console.log(detectCycleInGraph(input1)) // true

let input2 = [[1, 2], [2, 1], [1, 3], 
              [3, 1], [3, 4], [4, 3],
              [4, 5], [5, 4], [5, 6], 
              [6, 5], [4, 7], [7, 4]]

console.log(detectCycleInGraph(input2)) // false