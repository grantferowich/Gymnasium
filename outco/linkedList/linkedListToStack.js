// stack follows last in first out
// insertion occurs at the tail
// deletion occurs at the tail

class SinglyLinkedListNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.nIntext = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
    
    addToTail(value){
        let xNode = new SinglyLinkedListNode(value);
        if (this.length === 0){
            this.head = xNode;
            this.tail = xNode;
        } 
        if (this.length === 1){
            this.head.next = xNode;
            this.tail = xNode;
        }
        if (this.length > 1){
            this.tail.next = xNode;
            this.tail = xNode;
        }
        this.length++;
    }

    // 1-2-3
    // 1-> xx2
    removeFromTail(){
        if (this.length === 0){
            return
        }
        if (this.length === 1){
            let deleted = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return deleted; 
        }
        if (this.length > 1){
            let prev = this.head;
            let deleted = this.tail;
            for (let x = 0; x < this.length - 2; x++){
                prev = prev.next;
            }
            this.tail = prev;
            prev.next = null;
            this.length--;
            return deleted;
        }
    }
}

class Stack{
    constructor(){
        this.linkedList = new SinglyLinkedList()
    }
    push(value){
        this.linkedList.addToTail(value)
    }
    pop(){
        let node = this.linkedList.removeFromTail();
        return node;
    }
}

let s = new Stack()
s.push(1)
s.push(1)
s.push(2)
s.push(3)
s.push(5)
s.push(8)
s.push(13)
s.push(21)
console.log(s.pop()) // 21
console.log(s)