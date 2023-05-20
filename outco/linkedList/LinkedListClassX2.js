/*
 *  Homework - Linked List
 */

/*
 * Attempted on May 20, 2023.
 *  ListNode class
 *
 *  Prompt:    Create a ListNode class
 *             The ListNode class should contain the following properties:
 *
 *                 value:   {Integer} (initially null)
 *                  next:   {ListNode} (initially null)
 *
 *               Example:   input: let sample1 = new ListNode(1)
 *                          sample1.value     // 1
 *                          sample1.next      // null
 *
 *               Example:   input: let sample2 = new ListNode()
 *                          sample2.value     // null
 *                          sample2.next      // null
 *
 *
 *  LinkedList class
 *
 *  Prompt:     Create a LinkedList class
 *              The LinkedList class should contain the following properties:
 *
 *                length:   {Integer}
 *                  head:   {ListNode}
 *                  tail:   {ListNode}
 *
 *              The LinkedList class should also contain the following methods:
 *
 *                append:   A method that appends a value to the end of the
 *                          LinkedList.
 *
 *                          Input:     value {Integer}
 *                          Output:    {undefined}
 *
 *                insert:   A method that inserts an integer value at a set
 *                          index in the LinkedList (assume head index is 0).
 *
 *                          Input:     value {Integer}
 *                          Input:     index {Integer}
 *                          Output:    {undefined}
 *
 *                delete:   A method that removes a node at a specified index.
 *
 *                          Input:     index {Integer}
 *                          Output:    {undefined}
 *
 *              contains:   A method that checks to see if a value is contained
 *                          in the list.
 *
 *                          Input:     value {Integer}
 *                          Output:    {Boolean}
 *
 */

class ListNode{
    constructor(valueInt){
        this.valueInt = valueInt === undefined ? null : valueInt;
        this.nextInt = null;
    }
}

class LinkedList{
    constructor(){
        this.headInt = null;
        this.tailInt = null;
        this.lengthInt = 0;
    }

    /* 
    append diagram 

    suppose new list xList
    listX = <5>-<8>-<13>
    headInt = 5
    tailInt = 13
    length = 3
    ptrInt = 2

    instructions
    insert 5
    insert 8
    insert 13
    */
    append(valueInt){
        this.insert(valueInt, this.lengthInt)
    }

    insert(valueInt, indexInt){
        if (indexInt < 0){
            return;
        }

        let insertionNodeInt = new ListNode(valueInt);
        let nodeInt = this.headInt;
        if (this.lengthInt === 0){
            this.headInt = insertionNodeInt;
            this.tailInt = insertionNodeInt;
            this.lengthInt++
            return;
        }

        let ptrInt = 0;

        while (nodeInt !== null){
            if (ptrInt === indexInt - 1){
                this.tailInt.nextInt = insertionNodeInt;
                this.tailInt = insertionNodeInt;
                this.lengthInt++;
                return;
            }
            nodeInt = nodeInt.nextInt;
            ptrInt++
        }
    }

    /* 

    // delete a node in the middle 
    linkedList = <13>-<21>-<34>-<55>-<89>
    head: 13
    tail: 89
    length: 5
    ptrInt = 4

    instruction
    delete(2) -> iterate until ptrInt is 2 (equal to indexInt)
    -> store 55
    -> set current node's value to 55
    -> point current node at 89

    // delete a node at the end 
    linkedList = <13>-<21>-<34>-<55>-<89>
    head: 13
    tail: 89
    length: 5
    ptrInt = 4

    instruction
    delete(4) -> 


    */

    delete(indexInt){
        
        
        
        // invalid 
        if (this.lengthInt === 0){
            return 'Error running delete(xInt): The list is empty.'
        }
 
        // delete the head
        if (this.lengthInt === 1 && indexInt === 0){
            this.headInt = null;
            this.tailInt = null;
            this.lengthInt--;
            return;
        }

        let ptrInt = 0;
        
        while (nodeInt !== null){
            // delete tail 
            ptrInt++;
            nodeInt = nodeInt.nextInt;
        }

    }

    contains(valueInt){
        let nodeInt = this.headInt;
        // scan
        while (nodeInt !== null){
            if (nodeInt.valueInt === valueInt){
                return true
            }
            nodeInt = nodeInt.nextInt;
        }

        return false;
    }

    print(){
        let nodeInt = this.headInt;
        while (nodeInt !== null){
            console.log(nodeInt.valueInt)
            nodeInt = nodeInt.nextInt;
        }
    }
}

let linkedList1 = new LinkedList();
linkedList1.append(5);
linkedList1.append(8);
linkedList1.append(13); // successfully tested append(valueInt) on May 20, 2023
console.log(linkedList1)
// linkedList1.print(); // successfully tested print() on May 20, 2023
const contains13ToF = linkedList1.contains(13) // successfully tested contains(valueInt) on May 20, 2023
console.log(`Contains 13 result: ${contains13ToF}`) // expect true

// linkedList1.delete(2)
// const contains13ToF2 = linkedList1.contains(13)
// linkedList1.print();

let linkedList2 = new LinkedList();
linkedList2.append(34);
linkedList2.delete(0);
console.log(linkedList2)
