require('colors')
// stack follows last in first out
// insertion occurs at the tail
// deletion occurs at the tail

class SinglyLinkedListNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    insert(value, index){
        if (index < 0 || index > this.length){
            return;
        }
        let xNode = new SinglyLinkedListNode(value);
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
    
    append(value){
        this.insert(value, this.length)
    }

    prepend(value){
        this.insert(value, 0)
    }



    // 1-2-3
    // 1-> xx2
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

class Stack{
    constructor(){
        this.linkedList = new SinglyLinkedList()
        this.length = 0
    }
    push(value){
        this.length++
        this.linkedList.append(value)
    }
    pop(){
        if (this.length === 0){
            throw new Error('\nError: Stack underflow.'.red)
        }
        this.length--;
        let node = this.linkedList.remove(this.length).value
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
console.log('This is a success message'.green, s.pop()) // 21
console.log('This is a success message'.green, s)

let s1 = new Stack();
console.log(s1.pop()) // This log should be an error message. It is!