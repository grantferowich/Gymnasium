/*
Print backward

given a node, print the value of each node backwards from the tail
to the input node using recursion

example 
1 ===> 5 ====> 7 ====> 10s
head                    tail



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