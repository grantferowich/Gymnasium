/* 

Successfully tested the function 2/12/23.

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

function friendCircles(matrix) {
    if (matrix.length < 2) {return matrix.length}
    const rows = matrix.length
    const cols = matrix[0].length

    // for backtracking init visited set
    let visited = new Set()
    let output = 0;
  
    const dfs = (i,j) => {
        let key = `${i},${j}`
        
        if ( i < 0 || j < 0 || i >= rows || j >= cols || matrix[i][j] === 0 || visited.has(key)){
        return 
        }
        
        visited.add(key)
        dfs(i+1,j)
        dfs(i-1,j)
        dfs(i,j+1)
        dfs(i,j-1)
    }
  
    for (let x = 0; x < rows; x++){
      for (let y = 0; y < cols; y++){
        let key = `${x},${y}`
        if (matrix[x][y] === 1 && !visited.has(key)){
          dfs(x, y)
          output++;
        }
      }
    }
    console.log('matrix', matrix)
    return output > 0 ? output : 0
  }
  


let input1 = [[1, 1, 0], 
              [1, 1, 0], 
              [0, 0, 1]];
let input2 = [[1, 1, 0], 
              [1, 1, 1], 
              [0, 1, 1]];
// [ [ null, null, 0 ], 
//   [ null, null, 1 ], 
//   [ 0,     1,   1 ] ]

console.log(friendCircles(input1)) // 2 
console.log(friendCircles(input2)) // 1