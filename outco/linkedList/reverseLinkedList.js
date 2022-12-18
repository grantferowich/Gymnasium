/*
initial:
1 => 5 => 7 => 10 => null

reverse:
null <= 1 <= 5 <= 7 <= 10


// when current is 1, set current.next = null

Space complexity: constant O(1)
As input grows only three variables are required, whether there are 5 or 500,000 elements

*/

const reverseLinkedList = (node) => {

    let prev = null;
    let current = node;
    
    while (current !== null){
        // create reference to next node
        let ref = current.next;
        // reverse the arrow direction
        current.next = prev;
        // move the prev value over 1 spot
        prev = current;
        // move the current value over 1 spot
        current = ref;
    }

    return prev;
}