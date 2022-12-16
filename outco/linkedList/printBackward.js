/*
Print backward

given a node, print the value of each node backwards from the tail
to the input node using recursion

example 
1 ===> 5 ====> 7 ====> 10
head                    tail

// 10 7 5 1


// The input node must be the tail node
// the iteration continues
// until the current node is null (the pointer to null before the first node in the list)
*/

function printBackward(node) {
    traverse(node)
}

const traverse = (current) => {
    if (current == null){
        return; 
    }
    traverse(current.next)
    console.log(current.data)
}

