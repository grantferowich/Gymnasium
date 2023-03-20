/* 
Course Schedule II

For every pair, [A, B], B must be taken first in order to take A.


what are dependencies
[a, b] => take b first, then a
[1, 0] => 0 first, then 1


0: 1 2
1 : 3
2 : 3
 
0 has no dependencies (no prereqs)
1 has 0 as a dependency (0 is prereq)
2 has 0 as a dependency (0 is prereq)
3 has 1 and 2 as dependencies ()

How to represent graph? 
Map<Integer, Set<Integer>> graph
    0: 1 2
    1 : 3
    2 : 3
Map<Integer, Integer> in degree
    0: 1
    1: 1
    2: 1
    3: 2

-- how many dependencies does this integer have one have

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

const courseScheduleII = (NInt, prereqsArr) => {
    let map = new Map()
    let inDegreeMap = new Map() 

    // set initial values, default degree is 0
    for (let x = 0; x < NInt; x++){
        inDegreeMap.set(x ,0)
    }

    // the graph
    for (let x = 0; x < prereqsArr; x++){
        let c1Int = prereqsArr[x][0];
        let c2Int = prereqsArr[x][1];
        // take C2 first, then c1 
        // c2Int: [c1Int] 
        if (map.has(c2Int)){
            map.set(c2, new Set())
        }
        // ?? make sure works
        map.get(c2).set(c1)
        inDegreeMap.put(c1, inDegreeMap.get(c1) + 1)
    }   
    // with above, we populated the graph and inDegreeMap

    // Now, need to traverse, breadth first search
    let queue = new Queue();

    // add courses which has degree 0, no dependencies
    let entriesArr = Object.keys(inDegreeMap);
    for (let x = 0; x < entriesArr; x++){
        let courseInt = entriesArr[x][0];
        let degreeInt = entriesArr[x][1];

        if(degreeInt === 0){
            queue.enqueue(courseInt)
        }
    }


}