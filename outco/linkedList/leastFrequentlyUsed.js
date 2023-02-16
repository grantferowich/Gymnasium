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
        this.next = null,
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.head.next = this.tail
        this.tail.prev = this.head
    }
}