/* 

UNTESTED
**

Suppose you have the binary tree:

             1
           /   \
          2     3

          The list of sequences to generate this tree could be
          [1,2,3] or [1,3,2]



input: a tree node as an input
output: an array of arrays   
*/

class TreeNode{
    constructor(value=null){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const bstSequences = (bst) =>{
    let output = []
    let outputSet = new Set()
    let traveled = new Map()
    traveled.set(bst.value, true)

    const recurse = (nodes) => {
        let noChildFlag = true;
        let x = 0
        while ( x < nodes.length){
            let node = nodes[x]
            if (node.left !== null && traveled.get(node.left.value) === undefined){
                noChildFlag = false;
                traveled.set(node.left.value, true)
                recurse(nodes.concat(node.left))
                traveled.delete(node.left.value)
            }
            if (node.right !== null && traveled.get(node.right.value) === undefined){
                noChildFlag = false;
                traveled.set(node.right.value, true)
                recurse(nodes.concat(node.right))
                traveled.delete(node.right.value)
            }
            if (noChildFlag){
                let seq = nodes.map(node => node.value)
                if (!outputSet.has(seq.join(','))) {
                    output.push(seq)
                    outputSet.add(seq.join(','))
                }
            }
            x++
        }
    }

    recurse([bst])
    return output;
}
  
/* TESTS */

let t = new TreeNode(2)
t.left = new TreeNode(1)
t.right = new TreeNode(3)

let result = bstSequences(t)
console.log(result) // [[2,1,3], [2,3,1]]

