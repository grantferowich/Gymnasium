// Tested the linked list class on 12/18/22

class ListNode {
    constructor(value = null) {
     this.value = value
     this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
    append(value){
    this.insert(value, this.length)
    }

  // Time Complexity: O(N)
  // Auxiliary Space Complexity: O(N)
    insert(value, index){
    
    // check index input is valid
    if ( index < 0 || index > this.length){
      return
    }

    // instantiante the new node
    let newNode = new ListNode(value);

    if (this.length === 0){
      // do stuff when the list is empty
      this.head = newNode;
      this.tail = newNode
    } else if (index === 0){
      // special case when insertion location is the start of the list 
      newNode.next = this.head;
      this.head = newNode 
    } else if (index === this.length){
      // special case when insertion locattion is the end of the list
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // do stuff when the insertion location is anywhere else
      // init reference 
      let prev = this.head;
      for (let x = 0; x < index - 1; x++){
        // roll the reference continuously until reaching the insertion index
        prev = prev.next;
      }
      // move the newNode's pointer to the next node
      newNode.next = prev.next;
      prev.next = newNode;
    }
    this.length++
    }

    delete(index){
        if (index < 0 || index > this.length){
            return 
        }

        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else if ( index === 0 ){
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for ( let x = 0; x < index - 1; x++){
                prev = prev.next;
            }
            prev.next = prev.next.next;
            if ( index === this.length -1){
                this.tail = prev;
            }
        }
        this.length--;
    }

}






// let x = new LinkedList()
// console.log(x) // Expected Output:  LinkedList { length: 0, head: null, tail: null }

let y = new LinkedList()
let j = new ListNode(4)
let k = new ListNode(9)
y.append(j)
y.append(k)
console.log(y)
console.log(y.length)
// y.insert(1,0);
// console.log(y)