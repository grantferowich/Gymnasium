class DoublyLinkedListNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = new DoublyLinkedListNode();
        this.tail = new DoublyLinkedListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.length = 0
    }

    append(value){
        this.insert(value, this.length)
    }

    insert(value, index){
        if (index < 0 || index > this.length){
            return 
        }

        let newNode = new DoublyLinkedListNode(value)
        // dll empty
        if (this.head.next === this.tail){
            this.head.next = newNode
            this.tail.prev = newNode
            newNode.next = this.tail
            newNode.prev = this.head
        }
        if (index === 0){
            let ref = this.head.next;
            this.head.next = newNode;
            newNode.next = ref;
            newNode.prev = this.head
        } 
        if (index > 0){
            let ptr = this.head.next
            for (let x = 0; x < index - 1; x++){
                ptr = ptr.next
            }
            let ref = ptr.next
            ptr.next = newNode
            newNode.prev = ptr
            newNode.next = ref 
            ref.prev = newNode
        }
        this.length++
    }

    remove(value){
        let ptr = this.head;
        while (ptr !== null){
            if (value === ptr.value){
                let prev = ptr.prev;
                prev.next = ptr.next
                let ref = ptr.next
                ref.prev = prev
                break
            }
            ptr = ptr.next
        }
        this.length--;
    }
}

let dll = new DoublyLinkedList()
dll.append(3)
dll.append(5)
// dll.append(8)
dll.remove(3)
console.log(dll)
