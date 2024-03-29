/* 
Third degree neighbor
Successfully tested the function 02/10/23.


*/
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

function thirdDegreeNeighbors(edgeList, start) {
    let q  = new Queue();
    let visited = {}
    let output = []
    q.enqueue([start, 0])
    visited[start] = true
  
    const getNeighbors = (element, edgeList) => {
      let neighbors = []
      for (let x = 0; x < edgeList.length; x++){
        if (edgeList[x][0] === element){
          neighbors.push(edgeList[x][1])
        }
      }
      return neighbors
    }
  
    while (q.length > 0){
      let current = q.dequeue();
      let v = current[0]
      let degree = current[1];
      if (degree === 3){
        output.push(v)
      }
      let neighbors = getNeighbors(v, edgeList)
      if (neighbors.length !== undefined){
        for (let x = 0; x < neighbors.length; x++){
          if (!visited[neighbors[x]] && degree !== 3){
            q.enqueue([neighbors[x], degree+1]);
            visited[neighbors[x]] = true;
          }
        }
      }
    }
    // console.log(output)
    return output.length > 0 ? output : []
  }

let input = [[1,2],[2,1],[1,3],[3,1],[2,4],[4,2],[3,4],[4,3],
             [4,8],[8,4],[4,5],[5,4],[5,6],[6,5],[5,7],[7,5],
             [6,7],[7,6],[8,7],[7,8],[8,9],[9,8]]
console.log(thirdDegreeNeighbors(input, 1)) // [5,8] or [8,5]
