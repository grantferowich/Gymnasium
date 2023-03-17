/* 
LFU

- every time you insert a *new* element, the minimum frequency is 1


capacity: 3

min_frequency: 1

element_map: elements and their frequencies
frequency_map: Frequencies and their elements -- stored as dll


node_map:
{
    a: (a, 3),
    b: (d, 2),
    e: (e, 1)
}

freq_map:
{
    1: (h) <-> (e) <-> (t),
    2: (h) <-> (b) <-> (t),
    3: (h) <-> (a) <-> (t)
}

*/

class Node{
    constructor(key=null, value=null){
        this.key = key,
        this.value = value,
        this.frequency = 0,
        this.nIntext = null,
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.head.next = this.tail,
        this.tail.prev = this.head,
        this.size = 0
    }

    append(node){
        let prev = this.head
        let next = this.head.next
        node.prev = prev 
        node.next = next
        this.head.next = node
        next.prev = node
        this.size++
    }

    pop(node = null){
        if (node === null){
            node = this.tail.prev
        }
        
    }

}