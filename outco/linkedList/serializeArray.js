// Write a function which takes in an array and returns a linked list

// input: an array
// output: a linked list 
// constraints: 

// Successfully tested the function on 12/25/2022.

class ListNode {
    constructor(value) {
        this.value = value;
        this.nIntext = null;
    }
}
// [1,2,3] ==> 1 -> 2 -> 3
const serializeArray = (array) =>{
    // validity check
    if (array.length === 0){
        return
    }

    // instantiating node at position 0
    let value = array[0];
    let head = new ListNode(value);
    let current = head;

    for (let x = 1; x < array.length; x++){
        // set the node to point to the next node
        current.next = new ListNode(array[x]);
        current = current.next;
    }
    return head
}

console.log(serializeArray([1,2,3]))
