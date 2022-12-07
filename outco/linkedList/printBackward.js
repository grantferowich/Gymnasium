/*
Print backward

given a node, print the value of each node backwards from the tail
to the input node using recursion

example 
1 ===> 5 ====> 7 ====> 10
head                    tail

// 10 7 5 1


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

