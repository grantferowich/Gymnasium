/*
initial:
1 => 5 => 7 => 10 => null

reverse:
null <= 1 <= 5 <= 7 <= 10


// when current is 1, set current.next = null


*/

const reverseLinkedList = (node) => {

    let prev = null;
    let current = node;
    

    while ( current !== null){
        // create reference to next node
        let ref = current.next;
        // build arrow to previous value
        current.next = prev;
        // move the prev value over 1 spot
        prev = current;
        // move the current value over 1 spot
        current = ref;
    }

}